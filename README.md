# Lasitha Thilakarathna — Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-22c55e?style=for-the-badge&logo=github)](https://lasithadilshan.github.io/lasitha-thilakarathna/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.4.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12.7-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)
[![Security Audit](https://img.shields.io/badge/Security-0%20Vulnerabilities-brightgreen?style=for-the-badge&logo=shield)](https://github.com/lasithadilshan/lasitha-thilakarathna)

A modern, high-performance developer portfolio built with **React**, **Vite**, **Tailwind CSS**, and **GSAP**. Designed to showcase production-ready AI applications, autonomous agents, developer utilities, and full-stack software systems with sleek dark aesthetics, micro-interactions, smooth scrolling, and optimized Core Web Vitals.

**Live Website**: [https://lasithadilshan.github.io/lasitha-thilakarathna/](https://lasithadilshan.github.io/lasitha-thilakarathna/)

---

## 🌟 Highlights & Optimizations

- **⚡ Core Web Vitals & Performance**:
  - **90%+ Image Payload Reduction**: All project and avatar assets converted to modern, compressed WebP format.
  - **Largest Contentful Paint (LCP)**: Hero banner loaded eagerly with `fetchpriority="high"`.
  - **Cumulative Layout Shift (CLS)**: Explicit aspect ratio boxes (`aspect-[16/10]`) prevent layout shifts.
  - **Optimized Bundling**: Rollup manual chunking isolates `vendor-react`, `vendor-gsap`, and `vendor-lenis` for superior browser caching.
- **🎨 Modern Dark Aesthetics**:
  - Ambient radial glows and backdrop blur glassmorphism.
  - Smooth inertia scrolling powered by [Lenis](https://lenis.darkroom.engineering/).
  - Coordinated scroll-triggered reveals with [GSAP](https://gsap.com/) and ScrollTrigger.
- **♿ Accessibility & SEO**:
  - Full semantic heading hierarchy with a single `<h1>`.
  - Rich Open Graph (`og:*`), Twitter Card metadata, and canonical link definitions.
  - Fully accessible ARIA labels, focus-visible outlines, and screen reader considerations.
  - Active section tracking with dynamic `IntersectionObserver` scroll-spy navigation.
- **🛡️ Rock-Solid Security**:
  - **0 vulnerabilities** across all dependencies (`npm audit`).
  - Scoped dependency overrides for safe sub-dependencies (`brace-expansion`, `picomatch`).

---

## 🚀 Featured Projects

The portfolio showcases 100% original, production-ready applications:

| Project | Description | Tech Stack | Links |
| :--- | :--- | :--- | :--- |
| **DevFixHub** | Open-source developer error solutions, programming tutorials, and free in-browser developer utility tools. | Next.js, React, TypeScript, Tailwind CSS | [Live Demo](https://devfixhub.vercel.app/) · [Code](https://github.com/lasithadilshan/DevFixHub) |
| **LLM Hallucination Detector** | Uncertainty Quantification (UQML) platform analyzing factual grounding and hallucination metrics in Google Gemini models. | Python, Streamlit, UQML, Gemini API | [Live Demo](https://hallucination-detector-app.streamlit.app/) · [Code](https://github.com/lasithadilshan/Streamlit-LLM-Hallucination-Detector-App) |
| **MeetingMind AI** | Automated video transcription and executive meeting minutes generator with action item extraction. | Python, Streamlit, Google Gemini Multimodal | [Live Demo](https://video-transcription-app.streamlit.app/) · [Code](https://github.com/lasithadilshan/Streamlit-Video-Transcription-App) |
| **AI Parking Monitor & OCR** | Computer vision pipeline combining YOLOv8 vehicle tracking, EasyOCR license plate extraction, virtual zone mapping, and SQLite persistence. | Python, YOLOv8, EasyOCR, SQLite, OpenCV | [Code](https://github.com/lasithadilshan/Streamlit-AI-Parking-Monitor-and-License-Plate-Locator-App) |
| **Policy Document Intelligence** | Conversational RAG document intelligence system for contextual Q&A with precise source citations across multi-page PDF documents. | LangChain, ChromaDB, FastAPI, React | [Code](https://github.com/lasithadilshan/DocChatbot-RAG-Based-Policy-Document-Q-and-A-System) |
| **LinkNote Studio** | Client-side React markdown notepad with local browser storage, AES note encryption, and shareable snapshot links. | React, Tailwind CSS, Web Crypto API | [Live Demo](https://lasithadilshan.github.io/linknote-studio/) · [Code](https://github.com/lasithadilshan/linknote-studio) |

---

## 🛠️ Essential Tools & Technologies

- **Languages**: Python, TypeScript, JavaScript (ESNext), SQL, HTML5, CSS3
- **Frontend & Styling**: React 18, Next.js, Tailwind CSS, GSAP, Lenis, Material Symbols
- **Backend & AI**: FastAPI, Node.js, Express, LangChain, Google Gemini API, YOLOv8, EasyOCR
- **Databases & Vector Stores**: PostgreSQL, PgVector, MongoDB, SQLite, ChromaDB
- **DevOps & Build Tools**: Docker, Git, Vite 6, npm, PostCSS, Figma

---

## 💻 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/lasithadilshan/lasitha-thilakarathna.git
   cd lasitha-thilakarathna
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` to view the application.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Builds the production bundle to `dist/` with vendor chunk splitting. |
| `npm run preview` | Locally previews the production build in `dist/`. |
| `npm run lint` | Runs ESLint to check for code quality and syntax errors. |
| `npm run deploy` | Runs `npm run build` and deploys the `dist/` folder to GitHub Pages (`gh-pages` branch). |

---

## 📂 Project Structure

```
lasitha-thilakarathna/
├── public/
│   └── images/              # Optimized WebP assets, project screenshots, and custom tool SVGs
├── src/
│   ├── assets/              # Static downloadable assets (e.g. CV PDF)
│   ├── components/
│   │   ├── About.jsx        # About section with engineering stats
│   │   ├── Button.jsx       # Accessible Button variants (primary, outline, download)
│   │   ├── Contact.jsx      # Functional contact form and social icon links
│   │   ├── Footer.jsx       # Sitemap navigation, copyright, and social links
│   │   ├── Header.jsx       # Fixed glassmorphic navigation bar with scroll-spy
│   │   ├── Hero.jsx         # Hero section with headline, status pill, and CV download
│   │   ├── Navbar.jsx       # Responsive nav menu with active section indicator
│   │   ├── ProjectCard.jsx  # Card component with dual action buttons (Demo + Code)
│   │   ├── Review.jsx       # Client recommendations and feedback slider
│   │   ├── ReviewCard.jsx   # Individual testimonial card component
│   │   ├── Skill.jsx        # Essential Tools & Engineering Technologies grid
│   │   ├── SkillCard.jsx    # Technology card with custom SVG icon
│   │   └── Work.jsx         # Featured Projects section
│   ├── App.jsx              # Main application layout and GSAP timeline animations
│   ├── index.css            # Tailwind directives, custom utilities, and ambient glow effects
│   └── main.jsx             # React DOM root entry point
├── index.html               # HTML5 template with SEO, Open Graph & Twitter metadata
├── package.json             # Scripts, dependencies, and vulnerability overrides
├── tailwind.config.js       # Custom colors, fonts, and animation utilities
└── vite.config.js           # Vite configuration, base path, and Rollup chunk splitting
```

---

## 📬 Contact & Connect

- **Portfolio**: [lasithadilshan.github.io/lasitha-thilakarathna](https://lasithadilshan.github.io/lasitha-thilakarathna/)
- **GitHub**: [@lasithadilshan](https://github.com/lasithadilshan)
- **LinkedIn**: [Lasitha Thilakarathna](https://www.linkedin.com/in/lasitha-t-3027ab120/)
- **X (Twitter)**: [@dilshantilakar1](https://x.com/dilshantilakar1)
- **Instagram**: [@lasitha_dilshan_](https://www.instagram.com/lasitha_dilshan_/)

---

## 📄 License

This project is open source and available under the [Apache-2.0 License](LICENSE).
