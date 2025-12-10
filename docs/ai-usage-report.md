# AI Usage Report – Assignment 4

> **Author:** Abdulmajeed Aljuhaymi  
> **Course:** SWE363 – Web Engineering  
> **Date:** December 2024

---

## Tools Used

| Tool | Purpose | Usage Frequency |
|------|---------|-----------------|
| **ChatGPT (Codex CLI)** | Primary code assistant for HTML/CSS/JS authoring, debugging, and refactoring | High |
| **ChatGPT (Web)** | Content drafting, documentation, and brainstorming | Medium |
| **Gemini (Cursor)** | Presentation slides creation and documentation updates | Medium |

---

## Use Cases

### 1. Code Generation
- Scaffolded semantic HTML structure with accessible landmarks
- Generated CSS custom property systems for theming
- Created JavaScript modules for dynamic features (filtering, API calls)

### 2. Debugging
- Resolved CORS issues with API fetching
- Fixed localStorage state persistence bugs
- Debugged ARIA attribute implementations

### 3. Code Review & Improvement
- Refactored JavaScript into modular IIFEs
- Improved error handling with graceful fallbacks
- Enhanced accessibility with live regions

### 4. Documentation
- Generated technical architecture documentation
- Created README instructions
- Drafted this AI usage report

### 5. Design & UX
- Suggested accessibility coaching tips for the AI Coach feature
- Recommended animation patterns with reduced-motion support
- Proposed colour palettes for light/dark themes

---

## Detailed Sessions

### Session 1 – Portfolio Foundations

**Prompt:**
> "Help me scaffold an accessible personal portfolio with About, Projects, and Contact sections. I want light/dark themes and a responsive grid."

**AI Output:**
- Semantic HTML structure with proper landmarks
- CSS variables with light/dark palettes
- Responsive grid layout using CSS Grid
- JavaScript for theme toggling and greeting

**My Edits & Validation:**
- Reworked spacing scale and typography to match personal style
- Tuned gradients and data-URI backgrounds for better contrast
- Verified keyboard navigation and ARIA attributes manually
- Added skip link for screen reader users

**Learning Outcome:** Reinforced how CSS custom properties can drive theme switching without duplicating selectors.

---

### Session 2 – Dynamic Interactions & AI Feature

**Prompt:**
> "Add dynamic content plus data handling, animations, error states, and an AI enhancement to the portfolio."

**AI Output:**
- JavaScript modules for project filtering/search with saved state
- API-backed learning insights with loading/error handling
- AI Accessibility Coach tips component
- Enhanced contact form validation

**My Edits & Validation:**
- Adjusted project metadata and category labels to reflect actual work
- Ensured fallback messages exist for API failures
- Added accessibility refinements (live regions, aria-pressed states)
- Manually tested localStorage flows and reduced-motion behaviour

**Learning Outcome:** Practiced structuring vanilla JS modules for progressive enhancement and reinforced patterns for user-friendly error messaging.

---

### Session 3 – GitHub API Integration

**Prompt:**
> "Integrate a GitHub API section with sorting/filtering, persistence, and a graceful offline fallback."

**AI Output:**
- New `#github` section with sort and language filter controls
- JavaScript module to fetch repos from GitHub REST API
- CSS for select inputs, switch styles, and metadata chips

**My Edits & Validation:**
- Made username configurable via `data-github-user` attribute
- Added ARIA status messaging for screen readers
- Implemented curated fallback repos for rate-limit scenarios
- Added lazy-loading to project images for performance

**Learning Outcome:** Deepened understanding of mapping third-party API payloads to UI-friendly objects and guarding against failure states.

---

### Session 4 – Presentation Slides

**Prompt:**
> "Create presentation slides for my portfolio assignment with introduction, technical demo, deep dive, and conclusion sections."

**AI Output:**
- 10-slide HTML presentation with modern design
- Keyboard navigation and progress bar
- Gradient backgrounds and smooth animations
- Content covering all required presentation sections

**My Edits & Validation:**
- Customised content to match my specific project features
- Adjusted visual design to personal preferences
- Verified navigation works correctly
- Exported to PDF for submission

**Learning Outcome:** Learned how to create professional presentation materials using web technologies instead of traditional slide software.

---

### Session 5 – AI-Generated Accessibility Tips

**Prompt:**
> "Suggest short accessibility coaching tips I can cycle through in my portfolio."

**AI Output:**
- Four actionable tips on focus states, semantic text, context changes, and motion preferences

**My Edits & Validation:**
- Localised wording to match my style
- Added references to implementation choices (WCAG 2.2)
- Added attribution directly in the UI

**Learning Outcome:** Highlighted the value of pairing AI-generated guidance with explicit implementation notes to show understanding.

---

## Benefits

| Benefit | Description |
|---------|-------------|
| **Faster Development** | Reduced time on boilerplate code and repetitive tasks |
| **Better Quality** | Caught accessibility issues and suggested improvements |
| **Learning Acceleration** | Explained concepts and patterns I wasn't familiar with |
| **Problem Solving** | Helped debug complex issues with APIs and state management |
| **Documentation** | Assisted in writing clear, comprehensive documentation |

---

## Challenges

| Challenge | How I Addressed It |
|-----------|-------------------|
| **Overly Complex Suggestions** | Simplified AI-generated code to match project scope |
| **Incorrect Assumptions** | AI sometimes assumed frameworks; I clarified vanilla JS requirement |
| **Generic Code** | Customised AI outputs to match my personal style and actual projects |
| **Context Limitations** | Provided more context in follow-up prompts for better results |
| **Verification Required** | Always manually tested AI-generated code before committing |

---

## Learning Outcomes

1. **CSS Architecture**: Learned how CSS custom properties enable powerful theming systems
2. **Accessibility Patterns**: Understood ARIA live regions, focus management, and reduced-motion queries
3. **API Integration**: Gained experience with fetch, error handling, and offline fallbacks
4. **State Management**: Learned localStorage patterns for persisting user preferences
5. **Progressive Enhancement**: Understood how to build features that gracefully degrade
6. **AI Collaboration**: Developed skills in prompt engineering and critically evaluating AI outputs

---

## Responsible Use Checklist

- [x] Always reviewed AI-generated code before integrating
- [x] Documented every AI-assisted change in this log
- [x] Demonstrated understanding by modifying and improving suggestions
- [x] Preserved user privacy (no real API keys, no backend writes)
- [x] Used AI as a learning tool, not a replacement for understanding
- [x] Applied ethical considerations in all AI usage

---

## Conclusion

AI tools significantly accelerated development while maintaining code quality. The key was treating AI as a collaborative tool—always reviewing outputs, customising suggestions, and ensuring I understood every piece of generated code. This approach allowed me to learn new patterns while building a polished, production-ready portfolio.
