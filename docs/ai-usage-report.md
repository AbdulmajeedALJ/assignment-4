# AI Usage Report – Cursor (Assignment 3)

## Tools Logged
- **ChatGPT (Codex CLI)** – primary assistant for HTML/CSS/JS authoring and refactoring.
- **ChatGPT (web)** – drafted initial project descriptions and hero copy.

## Detailed Sessions

### Session 1 – Portfolio Foundations
- **Prompt**: “Help me scaffold an accessible personal portfolio with About, Projects, and Contact sections. I want light/dark themes and a responsive grid.”
- **AI Output**: Delivered semantic HTML structure, base CSS variables with light/dark palettes, responsive grid layout, and starter JavaScript for theme toggling, greeting, and contact form status messaging.
- **Edits & Validation**:
  - Reworked spacing scale and typography to match personal style.
  - Tuned gradients and data-URI backgrounds for better contrast.
  - Verified keyboard navigation and ARIA attributes manually.
- **Learning Outcome**: Reinforced how CSS custom properties can drive theme switching without duplicating selectors.

### Session 2 – Dynamic Interactions & AI Feature (current request)
- **Prompt**: “Add dynamic content plus data handling, animations, error states, and an AI enhancement to the portfolio.”
- **AI Output**:
  - JavaScript modules for project filtering/search with saved state, API-backed learning insights with loading/error handling, AI Accessibility Coach tips, and enhanced contact form validation.
  - CSS updates for new controls, tag chips, info cards, motion helpers, and reduced-motion support.
  - Documentation updates covering new architecture, README instructions, and expanded AI usage notes.
- **Edits & Validation**:
  - Adjusted project metadata, copy, and category labels to reflect actual work.
  - Ensured fallback messages exist for API failures and empty search results.
  - Added accessibility refinements (live regions, aria-pressed states, inline error labels).
  - Manually tested localStorage flows and reduced-motion behaviour.
- **Learning Outcome**: Practiced structuring vanilla JS modules for progressive enhancement and reinforced patterns for user-friendly error messaging.

### Session 3 – GitHub API Feed & State Management
- **Prompt**: “Integrate a GitHub API section with sorting/filtering, persistence, and a graceful offline fallback. Keep styling consistent with the existing info cards.”
- **AI Output**:
  - Suggested a new `#github` section with controls for sort, language filter, and hide-forks toggle.
  - Drafted a JavaScript module to fetch repos from the GitHub REST API, map data to cards, and persist preferences in `localStorage`.
  - Proposed CSS for select inputs, switch styles, and repo metadata chips.
- **Edits & Validation**:
  - Reworked copy to make the username configurable via `data-github-user` and to surface ARIA status messaging.
  - Trimmed the feed to 12 items and added curated fallback repos plus error banners for rate-limit scenarios.
  - Added lazy-loading/async decoding to project imagery as a quick performance win.
  - Manually tested sorting, language filters, and fork toggles while validating that preferences persist across reloads.
- **Learning Outcome**: Deepened understanding of mapping third-party API payloads to UI-friendly objects, guarding against failure states, and blending state persistence with client-side filtering.

### AI-Generated Copy
- **Prompt**: “Suggest short accessibility coaching tips I can cycle through in my portfolio.”
- **AI Output**: Four actionable tips focused on focus states, semantic text, announcing context changes, and respecting motion preferences.
- **Edits & Validation**:
  - Localised wording (“stylised”, “colour”) and injected references to implementation choices (WCAG 2.2 checklist, live region demo).
  - Added attribution (“ChatGPT draft · refined…”) directly in the UI.
- **Learning Outcome**: Highlighted the value of pairing AI-generated guidance with explicit implementation notes to show understanding.

## Responsible Use Checklist
- Always reviewed AI-generated code before integrating.
- Documented every AI-assisted change in this log per assignment requirements.
- Preserved user privacy (no real API keys, no backend writes).
- Applied edits to ensure the final implementation aligns with course rubric and personal standards.
