# Tara Asadi · System Analyst

Bilingual (Persian / English) portfolio website, written as a living System Requirements Specification.
Live: https://tara-asadi.github.io

## Structure
```
index.html        page structure
css/style.css     all styles (colors and fonts are tokens at the top, in :root)
js/content.js     ALL text content (Persian + English): edit this to update the site
js/main.js        rendering and interactions (language switch, matrix, use case, form, ⌘K menu, girih canvas)
assets/tara.jpg   profile photo
assets/preview.jpg  1200×627 link-preview image for LinkedIn / Telegram / WhatsApp
assets/favicon.svg
.nojekyll         tells GitHub Pages to serve files as-is
```

No framework or build step: plain HTML, CSS and JavaScript.

## Common edits
- **Change text / add a job:** edit `js/content.js`. Strings use single quotes; write apostrophes as `\'`.
- **Change the photo:** replace `assets/tara.jpg` (square, at least 800×800).
- **Change colors:** edit the tokens at the top of `css/style.css`.
- **Moved to a new address?** Update the 3 `tara-asadi.github.io` URLs in the `<head>` of `index.html` so link previews still work.

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## After updating
Check the LinkedIn preview at https://www.linkedin.com/post-inspector/
