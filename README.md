# Homora New Landing Page

A modern, multi-page redesign of [homora.fi](https://www.homora.fi) — Helsinki's premium home services platform.

## Live Demo
Staging: [https://homora.duckdns.org](https://homora.duckdns.org)

## Tech Stack
- Pure static HTML/CSS/JS (no build step)
- 4-language i18n (EN/FI/RU/UK) via localStorage
- Shared nav/footer via JS partials
- Interactive animations, parallax orbs, scroll-triggered reveals
- Fraunces serif + Inter sans typography
- Responsive mobile-first design

## Pages
- `/` — Home landing
- `/services/home-cleaning.html` — Home cleaning service
- `/services/laundry.html` — Laundry & ironing
- `/services/carpet-cleaning.html` — Carpet cleaning
- `/services/tailoring.html` — Sewing & tailoring
- `/services/handyman.html` — Handyman services
- `/pricing.html` — Full pricing table
- `/about.html` — About Homora
- `/faq.html` — Frequently asked questions
- `/join-us.html` — Career/hiring page

## Structure
```
homora-new/
├── index.html              # Home page
├── services/               # Individual service pages
│   ├── home-cleaning.html
│   ├── laundry.html
│   └── ...
├── pricing.html
├── about.html
├── faq.html
├── join-us.html
├── css/style.css           # All shared styles
├── js/
│   ├── i18n.js             # Translation dictionary + setLang()
│   └── app.js              # Animations, FAQ toggles, mobile menu
├── partials.js             # Shared nav + footer injection
└── public/images/          # All photos and logos
```

## Content
All textual content is based on the original [homora.fi](https://www.homora.fi) site (services, descriptions, pricing, FAQ).

## Local dev
```bash
# Serve locally
python3 -m http.server 3001
# or
npx serve .
```

## Deployment
Served via nginx at `/etc/nginx/sites-available/homora-new` with Let's Encrypt SSL.
