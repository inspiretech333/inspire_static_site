# Inspire Website Static Clone

This project is a clean, static HTML/CSS/Vanilla JS clone of the Inspire WordPress website, completely free of any WordPress dependencies (e.g., PHP, WP plugins, Elementor). 

## Output Architecture

```text
inspire_website/
├── index.html                                        (Home Page)
├── projects/
│   ├── index.html                                    (Our Projects Hub)
│   ├── computer-education-project.html
│   ├── art-music-project.html
│   ├── relief.html
│   ├── sports-project.html
│   ├── remedial-education-tuition-centre.html
│   └── educational-assistance.html
├── annual-reports.html                               (Annual Reports with PDF Placeholders)
├── contact-us.html
├── donate.html
├── assets/
│   ├── img/                                          (All localized images & logos)
│   ├── css/
│   │   └── styles.css                                (Global stylesheets)
│   ├── js/
│   │   └── scripts.js                                (Vanilla JS components - Hero Carousel & Nav)
│   └── fonts/                                        (Local font files, if applicable)
├── scraper.py                                        (The Python scraping & conversion script used)
└── README.md
```

## Features & Cleanup Delivered
- **WordPress Bloat Removed:** All instances of `wp-content`, `<meta name="generator">`, and LiteSpeed/jQuery bloat were purged.
- **Unified Assets:** All stylesheets were concatenated into a global `styles.css`. All interactive components were re-written into a single `scripts.js`, relying on Vanilla JavaScript instead of bloated libraries (like Swiper).
- **Social Media Hardcoded:** The header/footer references to Facebook and Instagram statically resolve to `@InspireDelhiIND` and `@inspire_in` respectively.
- **Annual Reports:** Obfuscated WordPress Flipbook plugins were replaced by clean, static placeholder buttons requiring manual linking of PDFs (as specified in constraints).

## How to Run Locally

You can run this project using any basic HTTP server:

**Using Python:**
```bash
python -m http.server 8000
```
Then visit: `http://localhost:8000`

**Using Node (npx):**
```bash
npx serve
```
