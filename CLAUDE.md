# CLAUDE.md — Project Instructions for Claude
Last updated: March 2026 (session 1)

## Project Overview
**POT System Limited** — An Architecture, Engineering, Construction Firm specialising in sustainable, energy-efficient buildings and infrastructure with climate-friendly materials.

Scraped and rebuilt from the original Framer site at `https://potsystemltd.com/`.

**Business contact:**
- Phone: +233 20 461 3757
- Email: info@potsystemltd.com / tenders@potsystemltd.com
- Accra Office: Ntreh Avenue, Adenta, Accra · GD-030-3311 · Coords: 5.71514, -0.15121
- Kumasi Office: Plot No. 1, Block I, North Patasi, Kumasi
- WhatsApp: https://wa.me/233204613757

**Brand tagline:** Precise | Optimised | Techniques

---

## Stack

Pure static site — **no framework, no build step, no npm**.

| Layer | Technology |
|---|---|
| Markup | HTML5 (5 pages) |
| Styling | Vanilla CSS (mobile-first, custom design system) |
| JS | Vanilla JS (2 small scripts) |
| Fonts | Google Fonts — Poppins, Inter, Fira Sans |
| Hosting | Static (open directly or any static host) |

---

## Project Structure

```
POTSystems/
├── CLAUDE.md
├── styles.css          # Full design system (mobile-first, min-width breakpoints only)
├── nav.js              # Hamburger menu toggle (shared across all pages)
├── cookies.js          # GDPR cookie consent banner + preferences modal
├── index.html          # Home page
├── engineering.html    # Engineering page
├── architecture.html   # Architecture page
├── smart-building.html # Smart Building page
├── contact.html        # Contact page + live Google Maps embed
├── logo.jpg            # Downloaded from framerusercontent.com (favicon/logo)
└── images/
    ├── hero-construction.png   # Home hero / about section
    ├── hero-engineering.png    # Engineering page image
    ├── hero-architecture.png   # Architecture page image + home "Why" section
    ├── hero-smart.png          # Smart Building page image
    └── about.jpg               # OG/social image (from original site)
```

---

## Pages & Navigation

| File | Title | Nav Active |
|---|---|---|
| `index.html` | Home | Home |
| `engineering.html` | Engineering | Engineering |
| `architecture.html` | Architecture | Architecture |
| `smart-building.html` | Smart Building | Smart Building |
| `contact.html` | Contact | Contact |

Original site had a typo in the Smart Building URL (`./smart-buidling`). Our local file uses the correct spelling `smart-building.html`.

---

## Design System (`styles.css`)

### Breakpoints (mobile-first, `min-width` only)
| Token | Value |
|---|---|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1200px |

Never use `max-width` media queries — all responsive overrides use `min-width`.

### Color Tokens
```css
--orange:  #ffa735   /* primary accent */
--dark-1:  #191a1b   /* nav, dark sections, body text */
--dark-2:  #023047   /* stats bar, deep dark */
--gray:    #7a7a7a   /* body text, muted */
--white:   #ffffff
```

### Typography
- `--font-primary`:   Poppins (headings, wordmark, stats)
- `--font-secondary`: Inter (body, nav links, labels)
- `--font-accent`:    Fira Sans (hero eyebrow)

### Key CSS Classes
| Class | Purpose |
|---|---|
| `.container` | Max-width 1200px, auto margins, responsive padding |
| `.section` | Vertical section padding (52px mobile → 80px desktop) |
| `.section-alt` | Light grey `#f7f7f7` background |
| `.section-dark` | `var(--dark-1)` background |
| `.grid-2` | 1→2 col grid (splits at 1024px) |
| `.grid-3` | 1→2→3 col grid (2 at 640px, 3 at 1024px) |
| `.card` | White card with shadow and hover lift |
| `.img-block` | Responsive image container with `min-height` steps |
| `.img-badge` | Absolute badge (e.g. "EST. 2009") inside `.img-block` |
| `.feature-list` / `.feature-item` | Orange dot bullet list |
| `.panel-dark` / `.panel-dark-2` | Dark `var(--dark-1)` / `var(--dark-2)` padded panels |
| `.feature-row` | Horizontal icon + text row (smart building features) |
| `.process-step` | Numbered process step with coloured circle |
| `.tag` | Small orange pill label |
| `.divider` | 40px orange underline accent |
| `.btn-primary` | Orange filled button |
| `.btn-outline` | Orange outlined button |
| `.btn-full` | Full-width button (mobile) |
| `.hero-btns` | Stacked column on mobile → row on 480px+ |
| `.whatsapp-btn` | Green WhatsApp pill button |
| `.prose` | Responsive grey body text |
| `.text-orange/gray/white/muted` | Colour utilities |

### Nav
- Fixed, `60px` mobile / `70px` desktop
- Hamburger (3-bar → ✕) visible on mobile; hidden at 1024px+
- Mobile: slide-down drawer + dark overlay backdrop (`nav-overlay`)
- Desktop: inline horizontal links

---

## JavaScript

### `nav.js`
Handles mobile hamburger toggle:
- Toggles `.open` on `.nav-toggle`, `.nav-links`, `.nav-overlay`
- Closes on: overlay click, any nav link tap, resize to desktop (≥1024px)
- Sets `document.body.style.overflow = 'hidden'` when open to prevent scroll

### `cookies.js`
GDPR cookie consent:
- Cookie key: `pot_cookie_consent`, version `"1"`, expires 365 days
- Injects banner styles into `<head>` dynamically
- Banner: "Accept all" / "Reject non-essential" / "Manage preferences"
- Preferences modal: Essential (always on) + Analytics + Marketing toggles
- `applyPreferences()` — wire up GA/GTM here when ready
- Banner hidden if valid cookie already exists

Both scripts are loaded at the bottom of every page's `<body>`.

---

## Images

All images downloaded locally from `framerusercontent.com` — do not reference the CDN URLs directly in production.

| File | Source URL |
|---|---|
| `logo.jpg` | `/images/lPUli27NKUdpQfwASuzXYemDyUA.jpg` (favicon of original site) |
| `images/hero-construction.png` | `/images/rDxdmIJTiuUVT7EXqo1GOuGAyKI.png` |
| `images/hero-engineering.png` | `/images/OfEE75rpXOIEFnp43aAVrcFHuUo.png` |
| `images/hero-architecture.png` | `/images/tqfyim2yrQki23EnpH8ieChf6w.png` |
| `images/hero-smart.png` | `/images/SVtSsluGoHfpqakIjJEcK8Ftk.png` |

The original site also references these nav-section card images (not yet used locally):
- `UTNFJkjKcZov6ZmhaQV0kT6ZJ4.png` (Engineering card)
- `uQjtQFDVvfTyD7pRwfnygmo.png` (Home card)
- `G1fz9hLOT7Psx1Z6kFDsftqEBPc.png` (Smart Building card)

---

## Contact Page

- Google Maps embed: `https://maps.google.com/maps?q=5.71514,-0.15121&z=16&output=embed`
- Contact form uses `action="mailto:info@potsystemltd.com"` (basic fallback — no backend)
- To add a proper form backend: replace `<form action="mailto:...">` with a `fetch()` to a backend endpoint or use EmailJS (see Loiscom project for EmailJS pattern)

---

## Coding Conventions

- **Mobile-first CSS only** — base styles target mobile, scale up with `min-width` breakpoints
- **No `max-width` queries** — do not add them
- **No inline layout styles** — use CSS classes; inline `style` only for one-off values (e.g. `margin-bottom`)
- Form `font-size: 1rem` — required to prevent iOS auto-zoom on focus
- Touch targets minimum `44px` height on all interactive elements
- `100svh` for hero (uses `svh` to account for mobile browser chrome)
- Image `object-fit: cover` inside `.img-block`
- All pages must include `<script src="nav.js">` and `<script src="cookies.js">` before `</body>`

---

## Dev / Local Preview

Open any `.html` file directly in a browser (`file://`) — no server needed.

For a proper `localhost`:
```bash
# Python
cd c:/DevOps/POTSystems && python -m http.server 3000

# Node
npx serve c:/DevOps/POTSystems
```

---

## Outstanding TODOs

- [ ] Replace `<form action="mailto:...">` with EmailJS or a real form backend
- [x] Add `sitemap.xml` and `robots.txt` for SEO
- [ ] Add project portfolio/gallery section (images available from original site)
- [x] Add favicon `<link rel="icon">` referencing `logo.jpg` in all page `<head>` sections
- [x] Wire up Google Analytics in `cookies.js` `applyPreferences()` function — loads GA4 dynamically on consent; replace `G-XXXXXXXXXX` with real Measurement ID
- [x] Mobile nav overlay smooth fade transition (opacity + pointer-events, matches drawer's 0.32s cubic-bezier)
- [ ] Consider adding a Projects/Portfolio page from the original Framer site images

---

## Completed (Session 1)

- [x] Scraped full site content (5 pages) from `https://potsystemltd.com/`
- [x] Downloaded all images locally from framerusercontent.com CDN
- [x] Built mobile-first design system in `styles.css` (min-width breakpoints only)
- [x] Added hamburger mobile nav with drawer, overlay, and `nav.js` toggle
- [x] GDPR cookie consent banner with preferences modal (`cookies.js`)
- [x] Embedded live Google Maps at exact coords `5.71514, -0.15121` (Adenta office)
- [x] Used actual site logo (`logo.jpg`) in nav and footer across all pages
- [x] All hero sections use locally downloaded construction images
- [x] Fixed original site typo: `smart-buidling` → `smart-building`
- [x] Form inputs set to `font-size: 1rem` to prevent iOS auto-zoom
- [x] Touch targets `min-height: 44px` on all interactive elements
- [x] Footer 2-col on mobile → 4-col at 768px
- [x] Stats bar 2×2 on mobile → 4-col at 768px

---

## Workflow Preferences

- **"add section X"** → check existing page structure first, match existing CSS classes
- **"fix layout"** → identify which breakpoint is broken, fix in CSS without touching others
- **"new page"** → copy nav + footer pattern from `index.html`, add `nav.js` + `cookies.js` scripts
- **"update content"** → edit HTML only; do not touch CSS unless layout is broken

Keep changes minimal and focused. Do not refactor surrounding code unless asked.
