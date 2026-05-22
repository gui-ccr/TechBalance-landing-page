# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

Landing page for **TechBalance Solutions**, an academic project for a Contabilidade (Accounting) course. It presents the company as a custom software provider targeting Brazilian microempresas, local commerce, and service providers. The team is called "Focus Team."

## How to run

No build step or package manager is used. Open `Landing Page.html` directly in a browser — all JSX is compiled at runtime by Babel Standalone. There is no dev server, bundler, or npm scripts.

```
start "" "Landing Page.html"   # Windows: opens in default browser
```

## Architecture

The page is a **zero-build React 18 SPA** loaded via CDN scripts:
- React 18.3.1 (UMD dev build)
- ReactDOM 18.3.1
- Babel Standalone 7.29.0 (transpiles JSX in the browser via `type="text/babel"`)

Components are loaded as separate `<script type="text/babel">` files and communicate through globals on `window` — each file exports its components by assigning to `window.ComponentName`. **Load order in `Landing Page.html` matters** because later files depend on globals defined by earlier ones:

1. `components/icons.jsx` — exports `window.Icon`
2. `components/header-hero.jsx` — exports `window.Header`, `window.Hero`, `window.useReveal`; also defines `useScrolled` and `useReveal` hooks
3. `components/sections.jsx` — exports `window.Problem`, `window.Solution`, `window.Features`, `window.Comparison`, `window.Audience`, `window.MissionVision`, `window.Team`
4. `components/contact-footer.jsx` — exports `window.Contact`, `window.CTA`, `window.Footer`
5. `components/app.jsx` — root; mounts `ReactDOM.createRoot` and composes all sections

## Design system

CSS custom properties in `styles.css` (`:root`):
- **Navy palette**: `--navy-950` → `--navy-700`, `--navy-card`, `--navy-card-hover`, `--navy-line`
- **Accent**: `--gold: #F5C518`, `--gold-soft`, `--gold-deep`
- **Text**: `--text` (white), `--text-muted`, `--text-dim`
- **Typography**: headings use `Montserrat` (900/800 weight, uppercase); body uses `Plus Jakarta Sans`

## Scroll-reveal animation

Elements with class `reveal` are observed by an `IntersectionObserver` (in `useReveal`, called once in `App`). When they enter the viewport they receive class `in`. CSS handles the transition. Staggered children use inline `transitionDelay` in milliseconds.

## Sections and their anchor IDs

| Section | ID |
|---|---|
| Hero | `#top` |
| Problem | `#problema` |
| Solution | `#solucao` |
| Features (3 modules) | `#operacao` |
| Comparison | `#comparativo` |
| Audience | `#publico` |
| Mission/Vision/Values | `#essencia` |
| Team | `#equipe` |
| CTA | *(no ID)* |
| Contact form | `#contato` |

The contact form is UI-only (submit simulates a 900 ms delay, then shows a success state — no actual backend).
