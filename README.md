<div align="center">

# ✨ Dikshant Athawale — Developer Portfolio

A premium, dark-themed developer portfolio built with vanilla HTML, CSS, JavaScript, and WebGL — featuring glassmorphism, aurora shaders, smooth animations, and an AI-powered chatbot assistant.

[![Live Demo](https://img.shields.io/badge/Live-Demo-4cd7f6?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-neon-eta-15.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Dikshant--Athawale-ddb7ff?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Dikshant-Athawale)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![WebGL](https://img.shields.io/badge/WebGL-990000?style=flat-square&logo=webgl&logoColor=white)

</div>

---

## 🚀 Features

### Core
- **WebGL Aurora Shader Background** — Real-time animated aurora gradient with mouse-reactive lighting, with a CSS fallback for devices without WebGL support
- **Floating Dock Navigation** — macOS-inspired bottom dock with scroll spy, magnetic hover, auto-hide on scroll, keyboard shortcuts (`1`–`8`), and tooltips
- **Scroll Reveal Animations** — Intersection Observer-based entrance animations with staggered delays and directional variants
- **Loading Screen** — Branded loading overlay with progress bar animation

### Sections
- **Hero** — Full-viewport introduction with floating tech icons, animated badge, and gradient text
- **About** — Photo card with bio, stats bento grid (animated counters), and download resume CTA
- **Tech Stack** — Filterable skill cards with category tabs and animated progress bars
- **Projects** — Featured project showcase with image overlays, tech tags, and live demo links
- **Education** — Vertical timeline with gradient connectors and glowing dot indicators
- **Certifications** — Grid cards with hover-activated gradient borders
- **Contact** — Split layout with social link cards and a contact form with validation

### 🤖 DevBot — AI Chatbot Assistant
- **Knowledge-Based Q&A** — Keyword + fuzzy matching engine against 40+ curated Q&A pairs covering skills, projects, education, certifications, career goals, and more
- **Typewriter Animation** — Character-by-character response reveal with variable speed
- **Markdown Rendering** — Lightweight parser for **bold**, bullet points, and line breaks
- **Quick Suggestions** — One-tap suggestion chips for common questions
- **Category Chips** — Contextual tags on responses (e.g., "Full Stack", "Real-Time")
- **Typing Indicator** — Animated bouncing dots during response generation
- **Responsive Panel** — Full-screen on mobile, slide-in side panel on desktop

### Design & UX
- **Glassmorphism** — Frosted glass surfaces with backdrop blur, translucent borders, and tonal layering
- **Neon Accents** — Cyan, purple, and blue glow effects on interactive elements
- **Dark Theme** — Deep navy base (`#050816`) with luminescent highlights
- **Responsive** — Mobile-first design that scales cleanly across all breakpoints
- **Accessibility** — Skip-to-content link, ARIA labels, `prefers-reduced-motion` support, focus-visible outlines, semantic HTML
- **Performance** — Lazy-loaded images, efficient CSS animations, `will-change` optimization

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Structure** | HTML5, Semantic Elements |
| **Styling** | Vanilla CSS, Custom Properties, Glassmorphism, `clamp()` fluid typography |
| **Scripting** | Vanilla JavaScript (ES6+), IIFE module pattern |
| **Graphics** | WebGL (GLSL shaders), CSS animations & transitions |
| **Fonts** | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans), [Inter](https://fonts.google.com/specimen/Inter), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) |
| **Icons** | [Material Symbols Outlined](https://fonts.google.com/icons) |

---

## 📂 Project Structure

```
portfolio/
├── index.html          # Single-page HTML (all sections)
├── styles.css          # Design system + component styles + chatbot styles
├── scripts.js          # WebGL shader, dock nav, scroll spy, animations
├── chatbot.js          # DevBot — knowledge base, matching engine, UI
├── chatbot/
│   ├── DESIGN.md       # Chatbot design system specification
│   ├── screen.png      # Chatbot UI reference screenshot
│   └── chatbotKnowledge.ts  # Original TypeScript knowledge base (reference)
├── Dikshant_Athawale_Resume_FullStack.pdf
└── README.md
```

---

## ⚡ Quick Start

No build tools required — this is a static site.

```bash
# Clone the repository
git clone https://github.com/Dikshant-Athawale/Portfolio.git
cd Portfolio

# Serve locally (any static server works)
python -m http.server 8000
# or
npx serve .
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
| :---: | :--- |
| `1` | Jump to Home |
| `2` | Jump to About |
| `3` | Jump to Skills |
| `4` | Jump to Projects |
| `5` | Jump to Education |
| `6` | Jump to Certifications |
| `7` | Jump to GitHub |
| `8` | Jump to Contact |
| `Esc` | Close chatbot panel |

---

## 📊 Lighthouse Score

| Metric | Score |
| :--- | :---: |
| Performance | 95+ |
| Accessibility | 95+ |
| Best Practices | 95+ |
| SEO | 95+ |

---

## 📬 Contact

- **Email**: [dikshant.r.athawale@gmail.com](mailto:dikshant.r.athawale@gmail.com)
- **LinkedIn**: [dikshant-athawale-374763213](https://linkedin.com/in/dikshant-athawale-374763213)
- **GitHub**: [Dikshant-Athawale](https://github.com/Dikshant-Athawale)

---

<div align="center">

**Designed & Developed by Dikshant Athawale**

© 2026 • Made with ❤️

</div>
