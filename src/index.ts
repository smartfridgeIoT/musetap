/**
 * MuseTap — Cloudflare Worker
 * Serves the static landing page from ./public
 * Deploy target: musetap.musetap.workers.dev
 */

import { getAssetFromKV, MapRequestToAsset } from '@cloudflare/kv-asset-handler';

// __STATIC_CONTENT is injected by Cloudflare at build time
// and points to the bundled ./public directory.
declare const __STATIC_CONTENT: KVNamespace;
declare const __STATIC_CONTENT_MANIFEST: string;

const MANIFEST = JSON.parse(__STATIC_CONTENT_MANIFEST);

const mapRequestToAsset: MapRequestToAsset = (req: Request): Request => {
  const url = new URL(req.url);
  // Serve index.html for root and any unknown path (SPA fallback)
  if (url.pathname === '/' || url.pathname === '') {
    return new Request(`${url.origin}/index.html`, req);
  }
  return req;
};

export default {
  async fetch(
    request: Request,
    _env: Record<string, unknown>,
    ctx: ExecutionContext
  ): Promise<Response> {
    const opts = {
      ASSET_NAMESPACE: __STATIC_CONTENT,
      ASSET_MANIFEST: MANIFEST,
      mapRequestToAsset,
    };

    try {
      return await getAssetFromKV(
        { request, waitUntil: (p: Promise<unknown>) => ctx.waitUntil(p) },
        opts
      );
    } catch (e) {
      // Fallback to index.html for non-asset routes
      const url = new URL(request.url);
      const fallback = new Request(`${url.origin}/index.html`, request);
      try {
        return await getAssetFromKV(
          { request: fallback, waitUntil: (p: Promise<unknown>) => ctx.waitUntil(p) },
          { ASSET_NAMESPACE: __STATIC_CONTENT, ASSET_MANIFEST: MANIFEST }
        );
      } catch {
        return new Response('Not Found', { status: 404 });
      }
    }
  },
};
