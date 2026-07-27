# MuseTap

> One tap. Every emotion. Any language.
> AI-generated emotional icons + culturally-adapted greetings, end-to-end encrypted.

[![Deployed on Cloudflare](https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white)](https://musetap.workers.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![SLINGSHOT 2026](https://img.shields.io/badge/SLINGSHOT-2026-E8366D)](https://sling-shot.org)

## Live

**https://musetap.workers.dev**

## What is MuseTap?

MuseTap turns a single tap into a unique emotional icon + culturally-adapted greeting. The system reads culture, language, recipient relationship, and shared memory, then generates a one-of-a-kind image you can share anywhere.

- **Near-zero input** — tap one emotion, that's it
- **Any language** — 10+ languages with cross-cultural adaptation
- **End-to-end encrypted** — AES-256-GCM + RSA-OAEP + Ed25519
- **Zero install** — pure web, no app required
- **Five patents pending** — AI security, vector memory, cross-cultural semantics

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Edge | Cloudflare Workers |
| Static Assets | Cloudflare KV (`@cloudflare/kv-asset-handler`) |
| Frontend | Vanilla HTML/CSS/JS (no framework, no build step) |
| Typography | Fraunces (display serif) + Spline Sans (body) |
| AI (planned) | Flux-schnell via fal.ai / Replicate |
| Memory (planned) | MongoDB Atlas Vector Search + IndexedDB |
| Crypto (planned) | Web Crypto API (Ed25519 + AES-256-GCM + RSA-OAEP) |

## Project Structure

```
musetap/
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

# Deploy to production — musetap.workers.dev
npm run deploy:prod

# Or deploy to staging — musetap-staging.workers.dev
npm run deploy:staging
```

### Connect to GitHub for Auto-Deploy

1. Go to [Cloudflare Dashboard → Workers & Pages](https://dash.cloudflare.com)
2. Click **Create application** → **Workers** → **Connect to Git**
3. Select the `smartfridge_IoT/musetap` repository
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

## Patent Portfolio

MuseTap's technology is protected by five pending patents:

| # | Patent | Field |
|---|--------|-------|
| P1 | End-to-End Encryption of AI-Generated Images | AI + Network Security |
| P2 | Vector-Embedding Private Memory System | Big Data + AI |
| P3 | Cross-Cultural Emotional Semantic Matching | AI + Digital Creative |
| P4 | Wallet-Based Key-Pair Identity System | Network Security |
| P5 | Zero-Perception Encryption for Viral Sharing | Network Security + Software |

All five align with China's nationally-encouraged IP fields and are eligible for CNIPA priority examination.

## License

MIT © 2026 MuseTap
