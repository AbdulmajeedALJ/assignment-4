# Assignment 4 – Abdulmajeed Aljuhaymi Portfolio

> **Course:** SWE363 – Web Engineering  
> **Assignment:** Final Portfolio Web Application  
> **Author:** Abdulmajeed Aljuhaymi  
> **Date:** December 2024

---

## 🎯 Project Overview

A professional personal portfolio website showcasing my projects, skills, and experience as a Software Engineering student. Built with accessibility-first principles, modern CSS, and zero external dependencies.

### ✨ Key Features

| Feature | Description |
|---------|-------------|
| **Dynamic Theming** | Light/dark mode with localStorage persistence |
| **Project Gallery** | Category filters, live search, empty states |
| **GitHub Integration** | Live API feed with sorting, filtering, offline fallback |
| **Learning Spotlight** | API-driven quotes with graceful error handling |
| **AI Accessibility Coach** | ChatGPT-authored tips with attribution |
| **Contact Form** | Inline validation, ARIA live regions, mailto handoff |

---

## 🚀 Live Demo

**[View Live Site →](https://abdulmajeedalj.github.io/assignment-4/)** *(GitHub Pages)*

---

## 🛠️ Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Local static file server

### Installation

```bash
# Clone the repository
git clone https://github.com/AbdulmajeedALJ/assignment-4.git

# Navigate to project directory
cd assignment-4

# Start a local server (choose one)
python3 -m http.server 8000
# or
npx serve .
# or
php -S localhost:8000

# Open in browser
open http://localhost:8000
```

### Quick Start (No Server)
Simply open `index.html` directly in your browser. Note: Some API features may be limited due to CORS restrictions.

---

## 📁 Project Structure

```
assignment-4/
├── index.html                    # Main application
├── css/
│   └── style.css                 # Styling and theming
├── js/
│   └── script.js                 # Interactive features
├── assets/
│   └── images/                   # Profile photo and assets
├── docs/
│   ├── ai-usage-report.md        # AI usage documentation
│   └── technical-documentation.md # Technical details
├── presentation/
│   ├── slides.html               # Interactive presentation
│   └── slides.pdf                # PDF export
├── README.md
└── LICENSE
```

---

## 🤖 AI Tools Usage Summary

| Tool | Purpose |
|------|---------|
| **ChatGPT (Codex CLI)** | Code generation, debugging, refactoring |
| **ChatGPT (Web)** | Content drafting, documentation |
| **Gemini (Cursor)** | Presentation slides, documentation updates |

**Detailed documentation:** See [`docs/ai-usage-report.md`](docs/ai-usage-report.md)

### AI Integration Highlights
- **AI Accessibility Coach**: ChatGPT-generated accessibility tips displayed in the portfolio
- **Content Generation**: Project descriptions and documentation
- **Code Assistance**: Debugging, API integration, accessibility patterns

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [Technical Documentation](docs/technical-documentation.md) | Architecture, implementation, deployment |
| [AI Usage Report](docs/ai-usage-report.md) | Tools, prompts, outputs, learnings |

---

## 🎨 Technology Stack

- **HTML5** – Semantic markup with ARIA attributes
- **CSS3** – Custom properties, Grid, Flexbox, animations
- **JavaScript** – Vanilla ES2020+, zero dependencies
- **APIs** – GitHub REST, Quotable

---

## ♿ Accessibility

This portfolio follows WCAG 2.1 guidelines:
- Skip link for keyboard navigation
- Logical heading hierarchy
- ARIA labels and live regions
- Focus indicators and keyboard support
- Reduced motion support
- 4.5:1+ colour contrast ratios

---

## 🌐 Browser Support

| Browser | Supported |
|---------|-----------|
| Chrome 100+ | ✅ |
| Firefox 100+ | ✅ |
| Safari 15+ | ✅ |
| Edge 100+ | ✅ |
| Mobile browsers | ✅ |

---

## 📦 Deployment

The site can be deployed to any static hosting service:

- **GitHub Pages**: Push to `gh-pages` branch
- **Netlify**: Connect repo for auto-deploy
- **Vercel**: Import and deploy instantly

No build step required – just upload the files!

---

## 📝 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## 👤 Contact

**Abdulmajeed Aljuhaymi**
- GitHub: [@AbdulmajeedALJ](https://github.com/AbdulmajeedALJ)
- Email: Use the contact form on the portfolio

---

*Built with ❤️ for SWE363 – Web Engineering*
