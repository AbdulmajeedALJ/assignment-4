# Technical Documentation – Assignment 4

> **Project:** Personal Portfolio Web Application  
> **Author:** Abdulmajeed Aljuhaymi  
> **Course:** SWE363 – Web Engineering  
> **Date:** December 2024

---

## Project Overview

A professional portfolio website showcasing my projects, skills, and experience as a Software Engineering student. Built with accessibility-first principles, zero external dependencies, and modern web standards.

### Key Objectives
- Create a polished, production-ready portfolio
- Demonstrate mastery of HTML, CSS, and JavaScript
- Implement accessibility best practices (WCAG 2.1+)
- Integrate external APIs with graceful error handling
- Showcase AI-assisted development workflow

---

## Architecture Overview

### File Structure

```
assignment-4/
├── index.html                    # Main application entry point
├── css/
│   └── style.css                 # Theming, layout, animations
├── js/
│   └── script.js                 # Interactive modules
├── assets/
│   └── images/
│       └── Personal_Photo.jpg    # Profile image
├── docs/
│   ├── ai-usage-report.md        # AI usage documentation
│   └── technical-documentation.md
├── presentation/
│   ├── slides.html               # Interactive presentation
│   └── slides.pdf                # PDF export
├── README.md                     # Project overview
└── LICENSE
```

### Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Markup** | HTML5 | Semantic structure with ARIA |
| **Styling** | CSS3 | Custom properties, Grid, Flexbox |
| **Behaviour** | Vanilla JavaScript (ES2020+) | Interactive features |
| **APIs** | GitHub REST, Quotable | Dynamic content |
| **Tooling** | None | Zero dependencies, runs anywhere |

---

## Implementation Details

### HTML Structure

The application uses semantic HTML5 with proper landmarks:

| Section | Element | Purpose |
|---------|---------|---------|
| Header | `<header>` | Navigation and branding |
| Hero | `<section id="about">` | Introduction with avatar |
| Projects | `<section id="projects">` | Filterable project gallery |
| GitHub | `<section id="github">` | Live repository feed |
| Learning | `<section id="learning">` | API-driven quotes |
| AI Coach | `<section id="ai-coach">` | Accessibility tips |
| Contact | `<section id="contact">` | Validated form |
| Footer | `<footer>` | Copyright |

### CSS Architecture

#### Theme System
- **Light Mode**: Sky-inspired palette with warm accents
- **Dark Mode**: Galaxy-inspired palette with cool gradients
- Toggle persisted via `localStorage` key: `theme`

#### Design Tokens
```css
/* Example custom properties */
--color-bg: #0f172a;
--color-text: #f8fafc;
--color-accent: #60a5fa;
--spacing-md: 1rem;
--radius-lg: 12px;
```

#### Responsive Breakpoints
| Breakpoint | Layout |
|------------|--------|
| < 700px | Single column, stacked |
| 700-999px | Two columns |
| ≥ 1000px | Three columns |

### JavaScript Modules

`script.js` is organised into self-executing modules (IIFEs):

#### 1. Theme Toggle
- Persists preference in `localStorage`
- Updates `aria-pressed` for accessibility
- Toggles `body.light` / `body.dark` classes

#### 2. Projects Module
- Renders project cards from in-memory array
- Category filtering with `aria-pressed` buttons
- Live search with debouncing (300ms)
- Empty state messaging
- Persists filter preference

#### 3. GitHub Feed
- Fetches repos from GitHub REST API
- Sorting by date or stars
- Language filtering
- Hide forks toggle
- Offline fallback with cached data
- Rate-limit error handling

#### 4. Learning Spotlight
- Fetches quotes from Quotable API
- Loading, success, and error states
- Retry button functionality
- Fallback to curated quotes

#### 5. AI Accessibility Coach
- Cycles through ChatGPT-authored tips
- Persists last-viewed tip index
- Clear attribution in UI

#### 6. Contact Form
- Inline field validation
- ARIA live regions for errors
- `mailto:` handoff (no server required)
- Focus management

---

## Data Handling

### Local Storage Keys

| Key | Purpose | Default |
|-----|---------|---------|
| `theme` | Light/dark preference | `dark` |
| `project-filter` | Last selected category | `all` |
| `ai-tip-index` | Current tip position | `0` |
| `github-feed-preferences` | Sort, language, forks | `{}` |
| `github-cache-{user}` | Cached repo data | `null` |

### External APIs

| API | Endpoint | Fallback |
|-----|----------|----------|
| GitHub | `api.github.com/users/{user}/repos` | Curated static repos |
| Quotable | `api.quotable.io/random` | AI-generated quotes |

---

## Accessibility Features

### WCAG 2.1 Compliance

| Feature | Implementation |
|---------|----------------|
| Skip Link | `<a href="#main" class="sr-only">Skip to content</a>` |
| Heading Hierarchy | Logical H1 → H2 → H3 structure |
| Keyboard Navigation | All interactive elements focusable |
| ARIA Labels | Buttons, regions, live areas |
| Focus Indicators | Visible `:focus-visible` styles |
| Reduced Motion | `prefers-reduced-motion` query |
| Alt Text | All images have descriptions |
| Colour Contrast | 4.5:1 minimum ratio |

### Live Regions

```html
<p id="projects-status" role="status" aria-live="polite">
  Showing 3 projects.
</p>
```

---

## Performance Optimisation

| Technique | Implementation |
|-----------|----------------|
| Lazy Loading | `loading="lazy"` on images |
| Async Decoding | `decoding="async"` on images |
| CSS Custom Properties | Single source, no duplication |
| Debounced Search | 300ms delay on input |
| API Caching | localStorage cache for GitHub |
| Minimal Footprint | Zero external dependencies |

---

## Browser Compatibility

Tested and working on:
- ✅ Chrome 100+
- ✅ Firefox 100+
- ✅ Safari 15+
- ✅ Edge 100+
- ✅ Mobile Safari (iOS 15+)
- ✅ Chrome Mobile (Android)

---

## Error Handling

### API Failures
- Network errors: Show offline message, load cached data
- Rate limits: Display friendly error with retry option
- Invalid responses: Fall back to static content

### Form Validation
- Required fields: Inline error messages
- Invalid email: Pattern matching with feedback
- Focus management: Auto-focus first error

---

## Deployment

### Local Development
```bash
# Clone repository
git clone https://github.com/AbdulmajeedALJ/assignment-4.git

# Start any static server
python3 -m http.server 8000
# or
npx serve .

# Open browser
open http://localhost:8000
```

### Production Deployment
Deploy by copying files to any static host:
- **GitHub Pages**: Push to `gh-pages` branch
- **Netlify**: Connect repository, auto-deploy
- **Vercel**: Import repository, instant deploy

---

## Future Enhancements

| Version | Features |
|---------|----------|
| v1.1.0 | PWA with offline support, service worker |
| v1.2.0 | Multi-language support (i18n) |
| v2.0.0 | Backend API, real contact form, analytics |

---

## Lessons Learned

1. **CSS Custom Properties** enable maintainable theming without selector duplication
2. **Progressive Enhancement** ensures core functionality works without JavaScript
3. **Graceful Degradation** for APIs keeps the user experience smooth
4. **Accessibility First** approach makes retrofitting unnecessary
5. **Zero Dependencies** reduces complexity and improves maintainability

---

## References

- [MDN Web Docs](https://developer.mozilla.org/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [GitHub REST API](https://docs.github.com/en/rest)
- [CSS Custom Properties Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
