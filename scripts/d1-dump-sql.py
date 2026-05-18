#!/usr/bin/env python3
"""
Generate one big .sql file with INSERT statements for every (or selected)
tables, with proper SQL string escaping (single-quote doubling).

Designed for `wrangler d1 execute --file=<output>` which uses CF's bulk
import endpoint (up to 5 GiB) — much faster than chunked inserts.

Usage:
  python3 scripts/d1-dump-sql.py \
    --src /path/to/local.db \
    --out /tmp/d1-dump.sql \
    [--tables raw_stores,themes,apps,...]
"""
import argparse
import sqlite3
import sys
from pathlib import Path

DEFAULT_TABLES = [
    "raw_stores",
    "themes",
    "apps",
    "judgeme_stores",
    "parsed_stores",
    "failed_stores",
    "detection_results",
]


def quote(v):
    if v is None:
        return "NULL"
    if isinstance(v, (int, float)):
        return str(v)
    if isinstance(v, (bytes, bytearray)):
        return "X'" + v.hex() + "'"
    return "'" + str(v).replace("'", "''") + "'"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--src", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--tables", help="comma-separated; default = standard set")
    args = ap.parse_args()

    src = Path(args.src)
    out = Path(args.out)
    if not src.exists():
        print(f"ERROR: source not found at {src}", file=sys.stderr)
        sys.exit(1)

    tables = args.tables.split(",") if args.tables else DEFAULT_TABLES
    conn = sqlite3.connect(str(src))
    conn.text_factory = str
    available = {
        r[0]
        for r in conn.execute(
            "SELECT name FROM sqlite_master WHERE type='table'"
        )
    }
    tables = [t for t in tables if t in available]
    print(f"Source: {src}")
    print(f"Out:    {out}")
    print(f"Tables: {', '.join(tables)}")

    with open(out, "w", encoding="utf-8") as f:
        for t in tables:
            cols = [r[1] for r in conn.execute(f"PRAGMA table_info('{t}')")]
            if not cols:
                continue
            total = conn.execute(f"SELECT COUNT(*) FROM {t}").fetchone()[0]
            print(f"  [{t}] dumping {total:>8} rows...")
            quoted_cols = ", ".join(f'"{c}"' for c in cols)
            select_cols = ", ".join(f'"{c}"' for c in cols)

            f.write(f"-- {t} ({total} rows)\n")
            # D1 rejects explicit BEGIN/COMMIT in SQL files — the import
            # endpoint provides its own transactional wrapper.
            cursor = conn.execute(f"SELECT {select_cols} FROM {t}")
            for row in cursor:
                values = ",".join(quote(v) for v in row)
                f.write(f'INSERT OR REPLACE INTO "{t}" ({quoted_cols}) VALUES ({values});\n')
            f.write("\n")

    sz = out.stat().st_size
    print(f"\nWrote {sz:,} bytes ({sz / 1_048_576:.1f} MB) to {out}")


if __name__ == "__main__":
    main()
