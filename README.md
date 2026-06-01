# ASHUTOSH KAMBOYA — NEURAL OS v2.0

> *A next-generation AI Operating System portfolio — cinematic, immersive, and production-ready.*

<div align="center">

![Neural OS](https://img.shields.io/badge/NEURAL_OS-v2.0-00dbe7?style=for-the-badge&labelColor=020617)
![Status](https://img.shields.io/badge/STATUS-ONLINE-00ff88?style=for-the-badge&labelColor=020617)
![Deployed](https://img.shields.io/badge/DEPLOYED-VERCEL-bd00ff?style=for-the-badge&labelColor=020617)
![License](https://img.shields.io/badge/LICENSE-MIT-ff8a00?style=for-the-badge&labelColor=020617)

**[🌐 Live Demo](https://personal-portfolio-iota-gray.vercel.app/)** · **[💼 LinkedIn](https://www.linkedin.com/in/ashutosh-kamboya-0297bb374/)** · **[📧 Email](mailto:ashutoshkamboya@gmail.com)**

</div>

---

## ✦ Overview

A futuristic personal portfolio that feels like entering a next-generation AI operating system. Inspired by **Iron Man's JARVIS**, **Blade Runner 2049**, **Tron Legacy**, and **Apple Vision Pro** — designed to impress recruiters within seconds and showcase capabilities as a **Data Analyst**, **ML Engineer**, and **Full Stack Developer**.

Built as a **single self-contained HTML file** — zero dependencies, zero build step, instant deployment.

---

## ✦ Sections

| Module | Description |
|--------|-------------|
| `NEURAL_CORE` | Hero with animated role cycling, particle network, interactive 3D orb & HUD stats |
| `BIO_METRICS` | Personal introduction, education timeline, career stats |
| `NEURAL_MAP` | Live interactive skill node network — hover any node to inspect |
| `PROJECTS_DB` | 5 real projects with actual screenshots, click-to-expand modal |
| `ANALYTICS_LAB` | BI command center — animated bar chart, donut, radar, KPI cards |
| `UPLINK_GITHUB` | **Real** GitHub contribution matrix (103 contributions, scraped live) |
| `CERTS_VAULT` | Holographic certificate display with progress indicators |
| `COMM_TERM` | AI terminal contact form wired to email |

---

## ✦ Projects Showcased

| # | Project | Stack | Link |
|---|---------|-------|------|
| 01 | **TravelAI** — AI Travel Insights & Crowd Analysis | Python · Scikit-Learn · Flask · ML | [GitHub](https://github.com/Ashu28705) |
| 02 | **UniBook** — Campus Resource Booking System | React · Node.js · MongoDB · Express | [Live Demo](https://uni-book-beige.vercel.app/dashboard) |
| 03 | **AgriAdvisor** — Digital Farming Advisory System | Python · Flask · MySQL · ML Models | [GitHub](https://github.com/Ashu28705) |
| 04 | **E-Waste** — Smart E-Waste Management System | React · Node.js · MongoDB · Express | [GitHub](https://github.com/Ashu28705) |
| 05 | **Pixel n Plate** — Gaming Cafe Platform | Next.js · React · MongoDB · Tailwind | [GitHub](https://github.com/Ashu28705) |

---

## ✦ Features

```
✓  Custom animated cursor with magnetic hover effect
✓  Cinematic boot sequence on load
✓  Particle network background reacting to mouse movement
✓  Interactive 3D orbital sphere in hero
✓  Animated role text cycling (DATA ANALYST → ML ENGINEER → ...)
✓  Real GitHub contribution matrix — 53 weeks, day-by-day hover tooltips
✓  Click-to-expand project modals with full screenshots
✓  Live bar chart, donut chart, radar chart in Analytics Lab
✓  Interactive skill neural network — 27 nodes, live connections
✓  3D perspective card tilt on hover (projects & certs)
✓  Scroll-triggered fade-in animations
✓  Active nav section highlighting on scroll
✓  Contact form → opens mailto with pre-filled content
✓  Toast notifications for actions
✓  Fully responsive (mobile, tablet, desktop)
✓  Zero dependencies — pure HTML/CSS/JS
✓  Single file — ~970 KB self-contained
```

---

## ✦ Tech Stack

```
Frontend     HTML5 · CSS3 · Vanilla JavaScript
Animations   Canvas API · CSS Animations · Intersection Observer
Charts       Custom Canvas — Bar, Donut, Radar
Fonts        JetBrains Mono · Sora · Hanken Grotesk (Google Fonts)
Data         GitHub Contributions API (scraped & embedded)
Deploy       Vercel (static) / GitHub Pages / Netlify
```

---

## ✦ Deployment

### Deploy to Vercel (Recommended)

```bash
# 1. Clone this repository
git clone https://github.com/Ashu28705/portfolio.git
cd portfolio

# 2. Install Vercel CLI (optional — or use Vercel dashboard)
npm i -g vercel

# 3. Deploy
vercel

# 4. For production
vercel --prod
```

Or simply **drag and drop** `index.html` into [vercel.com/new](https://vercel.com/new).

### Deploy to GitHub Pages

```bash
# In your repository settings → Pages
# Source: Deploy from a branch
# Branch: main / root
# Your site will be at: https://Ashu28705.github.io/portfolio
```

### Deploy to Netlify

Drag and drop the entire folder (or just `index.html`) into [app.netlify.com/drop](https://app.netlify.com/drop).

---

## ✦ Local Development

No build step required:

```bash
# Clone
git clone https://github.com/Ashu28705/portfolio.git

# Open directly in browser
open index.html

# Or serve locally
npx serve .
# → http://localhost:3000
```

---

## ✦ Repository Structure

```
portfolio/
├── index.html          # Complete self-contained portfolio (all assets inline)
├── vercel.json         # Vercel deployment configuration
├── README.md           # This file
└── .gitignore          # Git ignore rules
```

---

## ✦ Customization

All personal data is embedded directly in `index.html`. To update:

| What to change | Where in `index.html` |
|---|---|
| Name / roles | Search `ASHUTOSH KAMBOYA` |
| Project descriptions | Search `PROTOCOL_001` through `PROTOCOL_005` |
| Contact links | Search `ashutoshkamboya@gmail.com` |
| GitHub username | Search `Ashu28705` |
| Contribution data | Search `REAL_WEEKS` — re-scrape with the Python script below |

**Re-scrape GitHub contributions:**
```python
import subprocess, re, json
result = subprocess.run(['curl', '-s', 'https://github.com/users/YOUR_USERNAME/contributions'],
                       capture_output=True, text=True)
cells = re.findall(r'data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="(\d)"', result.stdout)
# Replace REAL_WEEKS / REAL_DATES in index.html with new data
```

---

## ✦ Performance

- **Single HTTP request** — all assets (fonts load async from Google)
- **60 FPS** canvas animations with `requestAnimationFrame`
- **GPU-accelerated** CSS transforms for card tilt
- **Lazy intersection** animations — elements only animate when visible
- **~970 KB** total (includes 5 embedded project screenshots as base64)

---

## ✦ Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Mobile Chrome | ✅ Responsive |
| Mobile Safari | ✅ Responsive |

---

## ✦ Contact

<div align="center">

**Ashutosh Kamboya**  
B.Tech ICT · Adani University · Ahmedabad, India

[![Email](https://img.shields.io/badge/EMAIL-ashutoshkamboya@gmail.com-00dbe7?style=flat-square&labelColor=020617)](mailto:ashutoshkamboya@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LINKEDIN-ashutosh--kamboya-0077B5?style=flat-square&labelColor=020617)](https://www.linkedin.com/in/ashutosh-kamboya-0297bb374/)
[![GitHub](https://img.shields.io/badge/GITHUB-Ashu28705-bd00ff?style=flat-square&labelColor=020617)](https://github.com/Ashu28705)

</div>

---

<div align="center">
<sub>Built with ♦ by Ashutosh Kamboya · NEURAL_OS v2.0 · © 2025</sub>
</div>
