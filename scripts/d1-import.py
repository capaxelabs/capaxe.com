#!/usr/bin/env python3
"""
Chunked bulk import from a local SQLite file into Cloudflare D1.

Iterates each table's rows via Python's sqlite3 module (reliable escaping),
builds multi-VALUES INSERT statements up to ~MAX_BYTES per chunk, and feeds
each chunk to `wrangler d1 execute --file=...`. Auto-shrinks on 413.

Usage:
  python3 scripts/d1-import.py \
    --src /Users/mukesh/Projects/marketing/shopify-leads/shopify_stores.db \
    --db shopify-leads \
    [--tables parsed_stores,apps] \
    [--start-batch 200]
"""
from __future__ import annotations

import argparse
import os
import sqlite3
import subprocess
import sys
import tempfile
from pathlib import Path

# Tables to import (and order — children after parents).
DEFAULT_TABLES = [
    "raw_stores",
    "themes",
    "apps",
    "judgeme_categories",
    "judgeme_stores",
    "parsed_stores",
    "failed_stores",
    "detection_results",
    "unknown_apps",
    "unknown_themes",
]

# Per-chunk SQL upload limit. D1 caps payloads around 100 KB; stay below that.
MAX_BYTES = 80_000


def quote_value(v):
    """Convert a Python value to a SQL literal."""
    if v is None:
        return "NULL"
    if isinstance(v, (int, float)):
        return str(v)
    if isinstance(v, (bytes, bytearray)):
        return "X'" + v.hex() + "'"
    s = str(v)
    return "'" + s.replace("'", "''") + "'"


def list_tables(conn) -> list[str]:
    return [
        r[0]
        for r in conn.execute(
            "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name"
        )
    ]


def import_table(conn, db_name: str, table: str, start_batch: int) -> None:
    cols = [r[1] for r in conn.execute(f"PRAGMA table_info('{table}')")]
    if not cols:
        print(f"  [{table}] not in source — skipping")
        return
    quoted_cols = ", ".join(f'"{c}"' for c in cols)

    total = conn.execute(f"SELECT COUNT(*) FROM {table}").fetchone()[0]
    if total == 0:
        print(f"  [{table}] 0 rows — skipping")
        return
    print(f"  [{table}] {total} rows, {len(cols)} columns")

    insert_prefix = (
        f'INSERT OR REPLACE INTO "{table}" ({quoted_cols}) VALUES\n'
    )

    cursor = conn.execute(f"SELECT {quoted_cols} FROM {table}")
    written = 0
    chunk_rows: list[str] = []
    chunk_size = len(insert_prefix)
    target = start_batch  # rows per chunk; auto-shrinks on 413

    def flush() -> bool:
        nonlocal chunk_rows, chunk_size, written, target
        if not chunk_rows:
            return True
        body = insert_prefix + ",\n".join(chunk_rows) + ";\n"
        with tempfile.NamedTemporaryFile(
            "w", suffix=".sql", delete=False, encoding="utf-8"
        ) as f:
            f.write(body)
            chunk_path = f.name
        try:
            cmd = f'yes | pnpm exec wrangler d1 execute {db_name} --remote --file={chunk_path}'
            r = subprocess.run(
                cmd, shell=True, capture_output=True, text=True
            )
            if r.returncode != 0:
                stderr_tail = (r.stderr or "")[-400:]
                if "413" in stderr_tail or "Payload Too Large" in stderr_tail:
                    if target > 25:
                        target = max(25, target // 2)
                        print(f"    payload too large; halving target to {target}")
                        return False
                print(f"    chunk failed: {stderr_tail}")
                return False
            written += len(chunk_rows)
            print(f"    {written}/{total}")
            chunk_rows.clear()
            chunk_size = len(insert_prefix)
            return True
        finally:
            os.unlink(chunk_path)

    pending_rows: list[tuple] = []
    for row in cursor:
        if pending_rows is None:
            break
        values = "(" + ",".join(quote_value(v) for v in row) + ")"
        # If adding would exceed either bytes or target rows, flush first.
        prospective = chunk_size + len(values) + 2
        if chunk_rows and (prospective > MAX_BYTES or len(chunk_rows) >= target):
            if not flush():
                # Retry this row with the smaller target
                pass
        chunk_rows.append(values)
        chunk_size += len(values) + 2

    flush()
    print(f"  [{table}] done: {written}/{total}")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--src", required=True, help="Path to local sqlite file")
    ap.add_argument("--db", default="shopify-leads", help="D1 database name")
    ap.add_argument("--tables", help="Comma-separated; default = all known")
    ap.add_argument("--start-batch", type=int, default=200,
                    help="Initial rows per chunk (auto-shrinks on 413)")
    args = ap.parse_args()

    src = Path(args.src)
    if not src.exists():
        print(f"ERROR: source not found at {src}", file=sys.stderr)
        sys.exit(1)

    tables = args.tables.split(",") if args.tables else DEFAULT_TABLES
    conn = sqlite3.connect(str(src))
    conn.text_factory = str

    available = set(list_tables(conn))
    tables = [t for t in tables if t in available]
    print(f"Source: {src}")
    print(f"Target: D1 {args.db}")
    print(f"Tables: {', '.join(tables)}\n")

    for t in tables:
        import_table(conn, args.db, t, args.start_batch)

    conn.close()
    print("\nDone.")


if __name__ == "__main__":
    main()
