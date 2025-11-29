# Assignment 3 – Abdulmajeed Aljuhaymi Portfolio

## Overview
Personal portfolio focused on accessibility-first UI, clean theming, and interactive storytelling. The single-page application is intentionally framework-free so it can be hosted anywhere with zero build tooling.

## Assignment 3 Notes (Rubric Alignment)
- Functionality: All interactive features (filters/search, GitHub feed, insights, AI tips, validation) run without build steps in modern browsers.
- Code Quality: Vanilla HTML/CSS/JS with modular IIFEs, semantic markup, and ARIA/live regions for clarity.
- Performance: Lazy-loaded images, async decoding, minimal dependencies, reduced-motion support, and persistent state to avoid rework.
- Compatibility: Tested in Chromium-based and Safari browsers at mobile/desktop breakpoints; degrades gracefully with JavaScript disabled.
- Documentation: README plus detailed technical guide and AI usage log as required by the rubric.

## Key Features
- Dynamic project gallery with category filters, live search, and empty states.
- Persistent light/dark modes plus saved project filter preferences via `localStorage`.
- Live GitHub feed that calls the GitHub API, supports sorting/filtering, persists preferences, and falls back gracefully if the API is unavailable.
- Learning Spotlight section that fetches technology quotes with loading, retry, and graceful fallback messaging.
- AI Accessibility Coach populated with ChatGPT-authored tips that cycle on demand.
- Contact form with inline validation, ARIA live updates, and a mailto handoff that opens your email client with a pre-filled draft.
- Performance touch-ups like lazy-loaded imagery to keep the page snappy.

## Getting Started
1. Clone or download this repository.
2. From the project root, start any static file server (for example `python3 -m http.server 8000`).
3. Open `http://localhost:8000/index.html` in your browser to explore the portfolio. Running through a server avoids CORS issues when fetching Insights.
4. (Optional) Update the GitHub handle by changing the `data-github-user` value on the `#github` section in `index.html`.

## Documentation
- `docs/technical-documentation.md` – in-depth architecture and implementation notes.
- `docs/ai-usage-report.md` – detailed log of AI tools, prompts, outputs, and follow-up edits.

## AI Usage Summary
ChatGPT (Codex CLI) assisted with the dynamic project gallery, GitHub API feed, fallback strategy, animation refinements, and accessibility copy. Edits were reviewed, adjusted, and documented in `docs/ai-usage-report.md`.
