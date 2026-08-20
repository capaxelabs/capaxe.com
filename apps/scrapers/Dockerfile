# Scraper container — runs the enrich + judge.me jobs against local SQLite
# and syncs writes to D1 (see src/node/main.ts). Built for the Hetzner box.
#
#   docker compose up -d --build
#   curl localhost:8787/stats

FROM node:22-bookworm-slim AS build
WORKDIR /app
COPY package.json ./
RUN npm install --no-audit --no-fund
COPY tsconfig.json tsconfig.node.json ./
COPY src ./src
RUN npx esbuild src/node/main.ts --bundle --platform=node --target=node22 \
      --format=cjs --external:better-sqlite3 --outfile=dist/node/main.cjs

FROM node:22-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production
COPY package.json ./
RUN npm install --omit=dev --no-audit --no-fund && npm cache clean --force
COPY --from=build /app/dist ./dist
COPY scripts ./scripts

# Local SQLite lives on a volume so it survives rebuilds.
VOLUME /data
ENV DB_PATH=/data/scraper.db
EXPOSE 8787

CMD ["node", "dist/node/main.cjs"]
