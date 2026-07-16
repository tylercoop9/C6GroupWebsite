# C6 Group Website

A 5-page static website for C6 Group, built from the company's existing
site code, logo, and color palette, with page content drawn from the
"C6 Group – Blueprint" brand document.

## Pages
- `index.html` — Home
- `about.html` — Purpose, mission, vision, values, philosophy, ideal client
- `services.html` — Five strategic pillars, the C6 approach, competitive advantages
- `industries.html` — Industries served, cross-industry perspective, acquisition advisory niche
- `contact.html` — Contact details and a front-end contact form

## Structure
- `css/styles.css` — core styles (colors, typography, components), built on
  the original site's palette (navy `#143B73`, blue `#215EAA`, red `#B22222`)
- `css/responsive.css` — mobile/tablet breakpoints, mobile nav menu, reduced-motion and focus-visible support
- `js/script.js` — mobile nav toggle, footer year, scroll-reveal animation, contact form handler
- `images/logo.png` — the original C6 Group logo
- `images/favicon.ico`, `favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png` — generated from the logo (the original `favicon.ico` in the source files was empty)

## Before you publish
1. **Contact form** — the form on `contact.html` is front-end only. Wire the
   `submit` handler in `js/script.js` up to a service like Formspree,
   Netlify Forms, or your own backend endpoint to actually receive messages.
2. **Contact details** — email and site URL are pulled from the original
   homepage footer (`contact@c6grouptn.com` / `c6grouptn.com`). Update these
   if they've changed, and add a phone number or address if you'd like one
   listed.
3. **Content** — page copy is drawn directly from the C6 Group Blueprint
   document (purpose, mission, values, five strategic pillars, ideal client,
   competitive advantages, brand voice). Review and adjust wording as needed.

## Running it locally
No build step required — it's plain HTML/CSS/JS.

```
python3 -m http.server 8000
```

Then visit http://localhost:8000
