# Resume — Seyed Ahmad Hoseini

Professional resume website for Seyed Ahmad Hoseini, Software Engineer & Django Backend Developer.

**Live Demo:** <https://sam8315.github.io/seyed-ahmad-hoseini-resume/>

## Features

- Responsive design (desktop, tablet, mobile)
- Print-optimized A4 layout
- RTL (right-to-left) Persian layout
- Self-hosted Vazirmatn font (no external requests)
- WebP image with JPG fallback via `<picture>`
- SVG icon sprite (monochrome, consistent)
- SEO: canonical, Open Graph, Twitter Card, JSON-LD Person schema
- Accessible: semantic HTML, aria labels, focus-visible outlines

## Tech Stack

- HTML5 (semantic markup)
- CSS3 (Grid, Flexbox, `@font-face`, `@media print`)
- Vazirmatn font (woff2, self-hosted)
- GitHub Pages (static hosting)

## Local Run

No build step required. Serve the project root with any static HTTP server:

```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .

# PHP
php -S localhost:8000
```

Open `http://localhost:8000/` in your browser.

## GitHub Pages Deployment

This site is deployed automatically from the `main` branch:

<https://sam8315.github.io/seyed-ahmad-hoseini-resume/>

To deploy changes, push to `main`:

```bash
git push origin main
```

## Project Structure

```
.
├── index.html              # Single-page resume
├── css/
│   └── style.css           # All styles (extracted, organized)
├── assets/
│   ├── favicon.svg         # SVG favicon (ס character)
│   ├── og-image.jpg        # Open Graph social share image (1200×630)
│   ├── profile.jpg         # Profile photo (original)
│   ├── profile.webp        # Profile photo (optimized)
│   └── fonts/
│       ├── Vazirmatn-Regular.woff2      (400)
│       ├── Vazirmatn-SemiBold.woff2     (600)
│       ├── Vazirmatn-Bold.woff2         (700)
│       └── Vazirmatn-ExtraBold.woff2    (800)
├── robots.txt              # Search engine crawler directives
├── sitemap.xml             # Sitemap for search engines
└── .gitignore
```

## Author

**Seyed Ahmad Hoseini**
- GitHub: [github.com/sam8315](https://github.com/sam8315)
- LinkedIn: [linkedin.com/in/ahmad-hoseini](https://linkedin.com/in/ahmad-hoseini)
- Email: sam.8315@gmail.com

## Repository

<https://github.com/sam8315/seyed-ahmad-hoseini-resume>
