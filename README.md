# Entry

> One tap. Every emotion. Any language.
> AI-generated emotional icons + culturally-adapted greetings, end-to-end encrypted.

[![Deployed on Cloudflare](https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white)](https://entry.workers.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![SLINGSHOT 2026](https://img.shields.io/badge/SLINGSHOT-2026-E8366D)](https://sling-shot.org)

## Live

**https://entry.workers.dev**

## What is Entry?

Entry turns a single tap into a unique emotional icon + culturally-adapted greeting. The system reads culture, language, recipient relationship, and shared memory, then generates a one-of-a-kind image you can share anywhere.

- **Near-zero input** — tap one emotion, that's it
- **Any language** — 10+ languages with cross-cultural adaptation
- **End-to-end encrypted** — browser-native encryption, zero-knowledge server
- **Zero install** — pure web, no app required

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Edge | Cloudflare Workers |
| Static Assets | Wrangler v3 native assets |
| Frontend | Vanilla HTML/CSS/JS (no framework, no build step) |
| Typography | Fraunces (display serif) + Spline Sans (body) |
| AI (planned) | Flux-schnell via fal.ai / Replicate |
| Memory (planned) | MongoDB Atlas Vector Search + IndexedDB |
| Crypto (planned) | Web Crypto API |

## Project Structure

```
entry/
├── public/             # Static assets served by the Worker
│   └── index.html      # Landing page (hero, demo, features, CTA)
├── src/
│   └── index.ts        # Cloudflare Worker entry point
├── wrangler.toml       # Cloudflare Workers config
├── package.json        # Dependencies & deploy scripts
├── tsconfig.json       # TypeScript config
└── README.md
```

## Quick Start

### Prerequisites

- Node.js 18+
- A Cloudflare account
- Cloudflare Wrangler CLI (`npm install -g wrangler`)

### Local Development

```bash
# Install dependencies
npm install

# Run locally on http://localhost:8787
npm run dev
```

### Deploy to Cloudflare Workers

```bash
# Login to Cloudflare (one-time)
npx wrangler login

# Deploy to production — entry.workers.dev
npm run deploy:prod

# Or deploy to staging — entry-staging.workers.dev
npm run deploy:staging
```

### Connect to GitHub for Auto-Deploy

1. Go to [Cloudflare Dashboard → Workers & Pages](https://dash.cloudflare.com)
2. Click **Create application** → **Workers** → **Connect to Git**
3. Select the `smartfridgeIoT/musetap` repository
4. Set build command: `npm install`
5. Set deploy command: `npx wrangler deploy --env production`
6. Every `git push` to `main` triggers automatic deployment

## Configuration

### Set your Cloudflare Account ID

Edit `wrangler.toml` and replace the empty `account_id`:

```toml
account_id = "your-cloudflare-account-id-here"
```

Find your account ID in the Cloudflare dashboard sidebar.

### Environment Variables (for future API endpoints)

```bash
# AI generation keys
npx wrangler secret put FAL_KEY
npx wrangler secret put REPLICATE_API_TOKEN

# Database
npx wrangler secret put MONGODB_URI
```

## License

MIT © 2026 Entry
