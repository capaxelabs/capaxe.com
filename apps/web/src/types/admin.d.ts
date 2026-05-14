// Ambient runtime bindings beyond what `wrangler types` regenerates.
// ADMIN_TOKEN is a Worker secret (set via `wrangler secret put`); it isn't in
// wrangler.json's `vars` so type generation skips it.
declare namespace Cloudflare {
  interface Env {
    ADMIN_TOKEN?: string;
  }
}
