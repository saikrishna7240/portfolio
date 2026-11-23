# Premium Developer Portfolio

A production-grade, editorial-style developer portfolio designed for a **Full Stack Developer | Building Digital Experiences**. 

Inspired by world-class digital product studios, award-winning Awwwards web designs, Linear, Vercel, and Apple, this portfolio emphasizes engineering rigor, thoughtful aesthetics, intentional whitespace, and zero framework bloat.

---

## ⚡ Key Highlights & Architecture

- **Visual Aesthetic:** Deep charcoal & obsidian theme (`#0a0b0e`, `#0f1115`, `#14171d`) paired with crisp off-white typography and refined electric lime (`#10f59b`) accents.
- **Micro-Interactions & Film Grain:** Subtle film grain texture overlay (`0.035` opacity), smooth magnetic cursor (with fine-pointer detection and `prefers-reduced-motion` compliance), and scroll-triggered viewport animations.
- **Interactive System Architecture Canvas:** A custom HTML5 Canvas generative node-graph rendering real-time interconnected nodes, telemetry metrics, and reactive spring physics in the Hero section.
- **Editorial Project Showcases:** Large-format asymmetric alternating project layouts with rich UI mockups (Enterprise Payroll Dashboard, High-speed POS Terminal, Neural Computer Vision Camera Feed, and Editorial Real Estate Discovery Engine) with an interactive architectural modal inspection suite.
- **100% Pure CSS Architecture:** Zero Tailwind CSS. Modular, component-scoped CSS files using modern CSS custom properties and responsive typographic clamp scales.
- **Centralized Data Model:** All project links, descriptions, tech stack items, experiences, milestones, and personal details are maintained in a single editable file: `src/data/portfolioData.js`.

---

## 📁 Project Structure

```text
premium-developer-portfolio/
├── index.html                   # HTML entry point with Syne, Plus Jakarta Sans, JetBrains Mono
├── package.json                 # Dependencies & scripts
├── vite.config.js               # Vite configuration
├── src/
│   ├── App.jsx                  # Main application composition & intersection observer
│   ├── main.jsx                 # React root mount
│   ├── data/
│   │   └── portfolioData.js     # Single source of truth for all content & links
│   ├── styles/
│   │   ├── variables.css        # Color palette, spacing scales, fonts, radii
│   │   └── global.css           # Reset, typography, grain overlay, utilities
│   └── components/
│       ├── common/
│       │   └── Icons.jsx        # Handcrafted SVG icons (GitHub, LinkedIn, Instagram)
│       ├── CustomCursor/
│       │   ├── CustomCursor.jsx # Smooth magnetic trailing cursor
│       │   └── CustomCursor.css
│       ├── Navbar/
│       │   ├── Navbar.jsx       # Floating blur navbar + mobile drawer + scroll spy
│       │   └── Navbar.css
│       ├── Hero/
│       │   ├── Hero.jsx         # Oversized typography, badges, social links
│       │   ├── Hero.css
│       │   └── SystemArchitectureCanvas.jsx # Interactive generative system canvas
│       ├── About/
│       │   ├── About.jsx        # Editorial bio, core pillars, interactive code ledger
│       │   └── About.css
│       ├── TechStack/
│       │   ├── TechStack.jsx    # Categorized technical matrix + quick search
│       │   └── TechStack.css
│       ├── Projects/
│       │   ├── Projects.jsx     # Asymmetric showcases + deep-dive modal
│       │   ├── Projects.css
│       │   └── ProjectPreviewMockup.jsx # Rich interactive UI mockups
│       ├── Experience/
│       │   ├── Experience.jsx   # Timeline, production outcomes, tech tags
│       │   └── Experience.css
│       ├── Journey/
│       │   ├── Journey.jsx      # "Always building. Always learning." roadmap
│       │   └── Journey.css
│       ├── Contact/
│       │   ├── Contact.jsx      # Direct email copy, live IST timezone, form dispatch
│       │   └── Contact.css
│       └── Footer/
│           ├── Footer.jsx       # Editorial credits, back-to-top, system health
│           └── Footer.css
```

---

## 🚀 Running the Project Locally

```bash
# 1. Navigate to the project directory
cd C:\Users\saikr\.gemini\antigravity\scratch\premium-developer-portfolio

# 2. Start the Vite development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

---

## 🛠 Customizing Content

To update your projects, live demo links, GitHub repositories, experience details, or personal bio, simply open:
👉 `src/data/portfolioData.js`

All sections dynamically consume this centralized configuration file.
