# Contributing to Eduban Frontend

First off — thank you for taking the time to contribute! 🎉 Eduban is an open-source
project and we welcome contributions of all kinds: bug reports, feature requests,
documentation, design, and code.

This guide covers the frontend repository. For the API see
[Eduban_backend](https://github.com/millystellar/Eduban_backend); for the smart contracts
see [Eduban_contract](https://github.com/millystellar/Eduban_contract).

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Ways to Contribute](#ways-to-contribute)
- [Development Setup](#development-setup)
- [Branching & Workflow](#branching--workflow)
- [Commit Messages](#commit-messages)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Pull Requests](#pull-requests)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)

## Code of Conduct

This project and everyone participating in it is governed by our
[Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold it.
Please report unacceptable behavior via the repository's issue tracker or a private
message to the maintainers.

## Ways to Contribute

- 🐛 **Report bugs** — open an [issue](https://github.com/millystellar/Eduban_frontend/issues/new?labels=bug)
- 💡 **Suggest features** — open an [issue](https://github.com/millystellar/Eduban_frontend/issues/new?labels=enhancement)
- 📖 **Improve docs** — typos, clarifications, examples
- 🎨 **Improve UI/UX & accessibility**
- 🧑‍💻 **Write code** — pick up an issue labeled `good first issue` or `help wanted`

If you plan to work on something non-trivial, please comment on (or open) an issue first
so we can align before you invest time.

## Development Setup

**Prerequisites:** Node.js v18+, npm v9+, and a running
[Eduban backend](https://github.com/millystellar/Eduban_backend) (or a hosted API).

```bash
# Fork the repo on GitHub, then:
git clone https://github.com/<your-username>/Eduban_frontend.git
cd Eduban_frontend
git remote add upstream https://github.com/millystellar/Eduban_frontend.git

npm install
cp .env.example .env.local   # configure API URLs
npm run dev                  # http://localhost:3000
```

Keep your fork in sync:

```bash
git fetch upstream
git rebase upstream/main
```

## Branching & Workflow

- Base all work on the latest `main`.
- Create a descriptive branch:
  - `feat/credential-share-modal`
  - `fix/dark-mode-contrast`
  - `docs/readme-setup`
  - `chore/upgrade-nextjs`
- Keep pull requests focused — one logical change per PR.

## Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(optional scope): <description>

[optional body]
[optional footer(s)]
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`.

Examples:

```
feat(profile): add credential sharing via QR code
fix(wallet): handle Freighter rejection gracefully
docs: document NEXT_PUBLIC_* environment variables
```

## Coding Standards

- **TypeScript** in strict mode — avoid `any`; type your props and API responses.
- **Components** — functional components with hooks; keep them small and composable.
- **Styling** — Tailwind utility classes; reuse existing design tokens and Radix primitives.
- **Accessibility** — semantic HTML, labels, keyboard support, and sufficient contrast.
- **i18n** — user-facing strings go through the i18n layer, not hardcoded.
- Run the checks before pushing:

```bash
npm run lint
npm run type-check
npm test
```

`npm run lint:fix` will auto-fix most style issues. A Husky pre-commit hook may run these
automatically.

## Testing

- Use **Jest** + **React Testing Library**.
- Add or update tests for any behavior you change.
- Prefer testing behavior (what the user sees) over implementation details.
- Place tests under `src/test/` or alongside the unit as `*.test.tsx`.

```bash
npm test                 # run once
npm run test:watch       # watch mode
npm run test:coverage    # coverage report
```

## Pull Requests

Before opening a PR:

- [ ] Branch is up to date with `upstream/main`
- [ ] `npm run lint && npm run type-check && npm test` all pass
- [ ] New/changed behavior is covered by tests
- [ ] Docs updated if behavior or config changed
- [ ] Commits follow Conventional Commits
- [ ] PR description explains **what** and **why**, and links related issues (`Closes #123`)

Maintainers will review, may request changes, and will merge once approved and CI is green.
Please be responsive to review feedback. 🙌

## Reporting Bugs

A good bug report includes:

- A clear title and description
- Steps to reproduce
- Expected vs. actual behavior
- Screenshots or console output if relevant
- Environment (browser, OS, Node version)

## Suggesting Features

Open an issue describing the problem you're trying to solve, your proposed solution, and
any alternatives you considered. Screenshots or mockups are very welcome.

---

Thanks again for helping make Eduban better! 💛
