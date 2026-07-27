/**
 * MuseTap — Cloudflare Worker (Wrangler v3)
 *
 * Static assets in ./public are served natively via [assets] in wrangler.toml.
 * The Worker only handles non-asset routes (future API endpoints).
 *
 * Deploy target: musetap.workers.dev
 */

export default {
  async fetch(
    request: Request,
    _env: Record<string, unknown>,
    _ctx: ExecutionContext
  ): Promise<Response> {
    const url = new URL(request.url);

    // Placeholder: future API routes (e.g. /api/generate, /api/decrypt)
    if (url.pathname.startsWith('/api/')) {
      return new Response(
        JSON.stringify({ ok: true, message: 'MuseTap API v1 — coming soon' }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    return new Response('Not Found', { status: 404 });
  },
};
