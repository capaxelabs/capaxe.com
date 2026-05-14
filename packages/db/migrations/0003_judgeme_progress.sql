-- Resume state for the judgeme crawler.
-- Python used a local JSON file (data/judgeme/api_progress.json). In Workers we
-- keep this in D1 so any invocation can pick up where the last one left off.
CREATE TABLE IF NOT EXISTS judgeme_progress (
    id INTEGER PRIMARY KEY CHECK (id = 1),    -- singleton row
    country_index INTEGER NOT NULL DEFAULT 0,
    category_index INTEGER NOT NULL DEFAULT 0,
    page INTEGER NOT NULL DEFAULT 1,
    paused_until TIMESTAMP,                   -- backoff window after rate-limit streaks
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT OR IGNORE INTO judgeme_progress (id) VALUES (1);
