# gantavyamalviya.github.io

Personal portfolio — [gantavyamalviya.github.io](https://gantavyamalviya.github.io)

## Stack
- Plain HTML5, CSS3 (custom properties, Grid, Flexbox), vanilla JS
- Fonts: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) + [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts
- No build step, no framework, no jQuery

## Structure
```
/
├── index.html          — single-page portfolio
├── resume.pdf          — downloadable résumé
├── favicon-32x32.png
├── assets/
│   ├── images/         — me.jpg, project screenshots
│   ├── skills/         — SVG icons (kept for reference)
│   ├── docs/           — certificates (AWS ML, Google, etc.)
│   └── misc/           — other files
├── scripts/
│   └── index.js        — nav scroll, typewriter, scroll reveal
└── styles/
    ├── styles.css       — compiled stylesheet (edit this directly)
    └── sass/
        ├── _variables.scss   — design tokens
        └── styles.scss       — SASS entry point
```

## Editing styles
Edit `styles/styles.css` directly (it is the source of truth).  
If you prefer SASS, run:
```sh
npx sass styles/sass/styles.scss styles/styles.css --style=expanded --watch
```
