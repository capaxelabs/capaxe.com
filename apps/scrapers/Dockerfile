# Scraper container — runs the enrich + judge.me jobs against local SQLite
# and syncs writes to D1 (see src/node/main.ts). Built for the Hetzner box.
#
# Bun runs the TypeScript directly and ships SQLite built in (bun:sqlite),
# so there is no install or build step — the image is just Bun + source.
#
#   docker compose up -d --build
#   curl localhost:8787/stats

FROM oven/bun:1-slim
WORKDIR /app
COPY package.json tsconfig.node.json ./
COPY src ./src
COPY scripts ./scripts

# Local SQLite lives on a volume so it survives rebuilds.
VOLUME /data
ENV DB_PATH=/data/scraper.db
EXPOSE 8787

CMD ["bun", "src/node/main.ts"]
