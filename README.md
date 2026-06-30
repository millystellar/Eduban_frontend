<div align="center">

# Eduban Frontend

**The web dashboard for Eduban — decentralized learning & credential verification on Stellar.**

[![CI](https://github.com/millystellar/Eduban_frontend/actions/workflows/ci.yml/badge.svg)](https://github.com/millystellar/Eduban_frontend/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

[Report a bug](https://github.com/millystellar/Eduban_frontend/issues/new?labels=bug) ·
[Request a feature](https://github.com/millystellar/Eduban_frontend/issues/new?labels=enhancement) ·
[Contribute](CONTRIBUTING.md)

</div>

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Related Repositories](#related-repositories)
- [License](#license)

## About

Eduban is an open-source platform for issuing and verifying tamper-proof educational
credentials on the [Stellar](https://stellar.org) blockchain. This repository holds the
**frontend** — a responsive, accessible web application where learners manage their
profiles and credentials, instructors publish courses, and anyone can verify a credential
on-chain.

It talks to the [Eduban backend](https://github.com/millystellar/Eduban_backend) for data
and to [Eduban smart contracts](https://github.com/millystellar/Eduban_contract) (via the
Stellar SDK) for on-chain operations.

## Features

- 🎓 **Credential management** — view, share, and verify blockchain-backed credentials
- 🏆 **Achievement system** — gamified, rarity-based learning achievements as dynamic NFTs
- 👤 **Profile dashboard** — unified view of credentials, achievements, and progress
- 📊 **Learning analytics** — real-time progress and completion statistics
- 🔐 **Wallet integration** — connect with Freighter, Albedo, and other Stellar wallets
- 🌍 **Internationalization** — multi-language support via `i18next`
- 🌓 **Dark mode** — system-aware light/dark theming
- ♿ **Accessibility** — WCAG-AA-minded components and keyboard navigation
- 📱 **PWA** — installable with offline support
- 🧪 **Well-tested** — Jest + React Testing Library

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS, Radix UI |
| State/Data | React Context, custom hooks |
| Blockchain | Stellar SDK, Freighter API, Stellar Wallets Kit |
| Realtime | Socket.io client |
| i18n | i18next / next-i18next |
| Testing | Jest, React Testing Library |
| Tooling | ESLint, Prettier, Husky |

## Architecture

```
┌──────────────────┐      REST / WS       ┌──────────────────┐
│  Eduban Frontend │ ───────────────────► │  Eduban Backend  │
│   (this repo)    │ ◄─────────────────── │   (API + DB)     │
└────────┬─────────┘                      └──────────────────┘
         │ Stellar SDK (wallet sign / read)
         ▼
┌──────────────────┐
│ Eduban Contracts │  (Soroban on Stellar)
└──────────────────┘
```

## Getting Started

### Prerequisites

- **Node.js** v18 or later
- **npm** v9+ (or your preferred package manager)
- A running [Eduban backend](https://github.com/millystellar/Eduban_backend) (or point env vars at a hosted instance)
- A Stellar wallet browser extension (e.g. [Freighter](https://www.freighter.app/)) for on-chain actions

### Installation

```bash
# 1. Clone
git clone https://github.com/millystellar/Eduban_frontend.git
cd Eduban_frontend

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env.local
# edit .env.local with your API URLs and keys

# 4. Start the dev server
npm run dev
```

The app runs at **http://localhost:3000**.

## Environment Variables

All browser-exposed variables must be prefixed with `NEXT_PUBLIC_`. See
[`.env.example`](.env.example) for the full list.

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend base URL | `http://localhost:3001` |
| `NEXT_PUBLIC_API_BASE_URL` | Backend API root | `http://localhost:3001/api` |
| `NEXT_PUBLIC_WS_URL` | WebSocket URL | `ws://localhost:3001` |
| `NEXT_PUBLIC_SOCKET_URL` | Socket.io URL | `http://localhost:3001` |
| `NEXT_PUBLIC_STELLAR_RECEIVER_ADDRESS` | Stellar account for payments | `G...` |
| `NEXT_PUBLIC_VAPID_PUBLIC_KEY` | Web-push VAPID public key | `B...` |

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Auto-fix lint issues |
| `npm run type-check` | TypeScript type checking (no emit) |
| `npm test` | Run the test suite |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage |
| `npm run analyze` | Bundle-size analysis |
| `npm run performance-test` | Build + Lighthouse audit |

## Project Structure

```
src/
├── app/          # Next.js App Router routes & layouts
├── pages/        # Legacy Pages Router (where still used)
├── components/   # Reusable UI + interactive learning widgets
├── context/      # React context providers
├── contexts/     # Additional context providers
├── hooks/        # Custom React hooks
├── lib/          # Shared libraries & clients
├── services/     # API + Stellar service layer
├── store/        # Client-side state
├── styles/       # Global styles & Tailwind layers
├── types/        # Shared TypeScript types
├── utils/        # Helpers & utilities
└── test/         # Test fixtures & suites
```

## Testing

```bash
npm test                 # run once
npm run test:watch       # watch mode
npm run test:coverage    # with coverage report
```

We aim to keep meaningful coverage on components, hooks, and services. New features
should ship with tests — see [CONTRIBUTING.md](CONTRIBUTING.md#testing).

## Deployment

The app is a standard Next.js application and deploys cleanly to Vercel, Netlify, or any
Node host:

```bash
npm run build
npm start
```

For Vercel: connect the repository, set the environment variables from
[Environment Variables](#environment-variables), and deploy. A `Dockerfile` is included
for container-based hosting.

## Contributing

Contributions are welcome and appreciated! Please read our
**[Contributing Guide](CONTRIBUTING.md)** and
**[Code of Conduct](CODE_OF_CONDUCT.md)** before opening a pull request.

Quick version:

1. Fork the repo and create a branch: `git checkout -b feat/short-description`
2. Make your changes with tests and pass `npm run lint && npm run type-check && npm test`
3. Commit using [Conventional Commits](https://www.conventionalcommits.org/)
4. Open a pull request describing the change

## Related Repositories

- 🖥️ [Eduban_frontend](https://github.com/millystellar/Eduban_frontend) — this repo
- ⚙️ [Eduban_backend](https://github.com/millystellar/Eduban_backend) — API & services
- 📜 [Eduban_contract](https://github.com/millystellar/Eduban_contract) — Soroban contracts

## License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for details.

© 2026 Meshmulla
