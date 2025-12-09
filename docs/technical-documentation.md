# Technical Documentation (Assignment 3)

Continuation of the portfolio from Assignment 2, expanded with new API integration, richer state management, and performance refinements to satisfy Assignment 3 rubric items.

## Architecture Overview

### File Structure
```
assignment-3/
├── index.html                # Source of truth for semantic layout
├── css/
│   └── style.css             # Theming, layout, animation utilities
├── js/
│   └── script.js             # Interactive behaviour and state management
├── assets/
│   └── images/
│       └── Personal_Photo.jpg    # Profile image used in the hero
└── docs/
    ├── ai-usage-report.md    # Required AI usage log
    └── technical-documentation.md
```

### Technology Stack
- **Markup**: HTML5 with accessible landmarks and ARIA usage.
- **Styling**: CSS custom properties, Grid, Flexbox, prefers-reduced-motion queries.
- **Behaviour**: Vanilla JavaScript (ES2020+) organised into self-executing modules.
- **Tooling**: Zero external dependencies; designed to run from any static file server.

## Implementation Details

### HTML Structure
- **Hero**: Introduces Abdulmajeed with a time-aware greeting and avatar.
- **Projects**: Contains filter controls, live search, and a grid that is progressively enhanced via JavaScript. Static cards remain as a noscript fallback.
- **Learning Spotlight**: Displays API-driven insights with loading, success, and fallback states.
- **AI Accessibility Coach**: Cycles through AI-authored tips with clear attribution.
- **Contact**: Demo form with inline validation, success messaging, and ARIA live regions.
- **Live GitHub Feed**: Fetches public repositories via the GitHub API, with sorting/filtering controls, offline-aware fallbacks, saved-cache reuse, and optional PAT support (`data-github-token` or `localStorage` key `github-pat`) to avoid rate limits.

### CSS Architecture
- **Theme System**: Light “sky” and dark “galaxy” palettes powered by CSS custom properties. `body.light` and `body.dark` toggle each variable set.
- **Component Primitives**: `.card`, `.info-card`, `.btn`, `.tag-chip`, and `.project-controls` create a consistent visual language across sections.
- **Animations**: `.fade-in` keyframes animate cards and AI tips. A global `prefers-reduced-motion` override disables transitions for motion-sensitive users.
- **Responsive Layout**: Mobile-first styles cascade into two- and three-column grids at 700px and 1000px respectively. Flexbox keeps controls aligned on larger screens.

### JavaScript Modules
`script.js` is segmented into self-invoking modules to avoid global collisions:

- **Greeting**: Computes time of day and updates the hero heading.
- **Theme Toggle**: Persists the user’s theme choice (`localStorage` key `theme`) and updates ARIA state on the toggle button.
- **Projects Module**:
  - Renders project metadata from an in-memory array.
  - Applies category filters and live search (debounced) with results announced via a live region.
  - Persists the last selected filter under `project-filter`.
  - Provides empty-state messaging when no results match.
- **GitHub Feed**:
  - Pulls up to 40 public repos from the GitHub API for the configured username (`data-github-user` attribute).
  - Supports sorting by recent updates or stars, filtering by language, and toggling forks.
  - Persists preferences (`sort`, `language`, `hideForks`) in `localStorage` under `github-feed-preferences`.
  - Falls back to curated static entries, caches the last successful fetch per user, detects offline/timeouts, and accepts an optional PAT (`data-github-token` or `localStorage` key `github-pat`) to reduce rate-limit errors.
- **Learning Spotlight**:
  - Fetches quotes from the Quotable API.
  - Shows loading state, handles non-200 responses, and falls back to AI-curated messages when offline.
  - Exposes a retry button that reuses the same logic.
- **AI Coach**:
  - Cycles through ChatGPT-authored accessibility reminders.
  - Saves the last seen tip in `ai-tip-index` so users resume where they left off.
- **Contact Form**:
  - Validates required fields, renders inline error copy, focuses the first invalid control, and announces overall status.
  - Hands off to the visitor’s email client via a `mailto:` link, using the address provided in `data-mailto` on the form element.
  - Resets error states on input and form reset actions.
- **Footer Year**: Keeps the copyright year current.

## Data Handling
- **Local Storage**: Stores theme preference, last-used project filter, most recent AI tip index, and GitHub feed preferences.
- **Remote Data**:
  - Fetches technology quotes from `https://api.quotable.io` with fallbacks.
  - Fetches public repositories from the GitHub REST API with error handling and offline-friendly backups.
- **Forms**: Client-side validation with a `mailto:` draft so users can finish and send through their own email provider (no data stored on the server).

## Accessibility Considerations
- Logical heading hierarchy with skip link for keyboard users.
- Filter buttons use `aria-pressed` to convey toggle state; search status updates through `aria-live="polite"`.
- API and AI sections use live regions for dynamic content and surface retry/error messaging inline.
- Contact form surfaces inline feedback, maintains focus order, and exposes status updates through `role="status"`.
- Motion reduced for users expressing the preference via OS settings.
- Images in the project grid are lazy-loaded to reduce initial bandwidth while still providing alt text and decoding hints.

## Animation and Feedback
- Cards and AI tips fade upwards when introduced.
- Buttons include hover and active states while respecting reduced motion settings.
- Loading states and retry messaging ensure users know when data is pending or unavailable.

## Deployment
- No build process; deploy by copying the repository contents to any static host (GitHub Pages, Netlify, Vercel, etc.).
- Recommend serving via HTTP(S) to avoid browser restrictions on `fetch` from local `file://` origins.

## Future Enhancements
- Expand the project dataset and source images dynamically.
- Add analytics hooks to understand filter usage.
- Integrate a real contact backend or serverless function for submissions.
- Provide localisation-friendly strings for multi-language support.

### Future Versions
- v1.1.0: PWA features, offline support
- v1.2.0: Dynamic content loading
- v2.0.0: Backend integration, real contact form
