# The Long Way Home 🧭

A landing page for a made-up 2D adventure game where players score
points for taking the **longest**, most scenic route home instead of
the fastest one. Built as a teaching project for a coding bootcamp -
every file is written and commented so a beginner can read it, line by
line, and understand exactly what is happening and why.

Open `index.html` in any web browser to run it. No installs, no build
tools, no internet connection required.

---

## 1. Project Overview

The page tells the story of the game and lets visitors try small,
simplified versions of its core mechanics right on the page:

- Pick one of four heroes and read their story (**Character Selector**)
- Watch stats count upward as you scroll (**Animated Counters**)
- Generate a random practice route (**Random Route Generator**)
- Read rotating strategy tips (**Game Tips**)
- Build a route on a mini map, or ask the AI companion **Pip** to
  suggest a longer one for you (**Mini Interactive Map + AI Pathfinding**)

Everything is built with plain HTML5, CSS3 and vanilla JavaScript - no
frameworks, no libraries, no build step.

## 2. Folder Structure

```
long-way-home/
├── index.html          The page content and structure (all 11 sections)
├── css/
│   └── style.css       Every visual rule: colours, layout, spacing, responsiveness
├── js/
│   └── script.js       Every interactive feature (see Section 5 below)
├── images/
│   ├── favicon.svg          Browser tab icon (hand-drawn compass)
│   ├── logo.svg             Nav bar / footer brand mark
│   ├── hero-map.svg         Hero section background illustration
│   ├── character-scout.svg  Milo the Scout
│   ├── character-ranger.svg Ruby the Ranger
│   ├── character-nomad.svg  Sable the Nomad
│   ├── character-tinker.svg Echo the Tinker
│   └── gallery-1.svg … gallery-6.svg   Six "screenshot" illustrations
└── README.md            This file
```

All images are hand-drawn SVG code (shapes made of coordinates), not
downloaded photos - so the whole project works completely offline.

## 3. HTML Concepts Used

- **Semantic elements**: `<header>`, `<nav>`, `<main>`, `<section>`,
  `<figure>`/`<figcaption>`, `<footer>` - each tag describes *what* the
  content is, not just how it looks.
- **Accessibility (a11y)**: a "skip to main content" link, `aria-label`,
  `aria-expanded`, `aria-controls`, `aria-pressed`, `aria-live` regions,
  and real `hidden`/`disabled` attributes so screen readers and
  keyboards work correctly, not just the mouse.
- **Forms**: `required`, `type="email"`, and `<label for="...">` so the
  browser validates input for us before any JavaScript runs.
- **`data-*` attributes**: used on the character cards to store each
  hero's name, role, ability and quote directly in the HTML, ready for
  JavaScript to read.
- **`<template>`-free dynamic content**: the mini map's 40 tiles are
  *not* hand-typed in the HTML - JavaScript builds them, which is why
  `index.html` only has one empty `<div id="map-grid">` for it.

## 4. CSS Concepts Used

- **CSS variables (custom properties)** in `:root` for every colour,
  spacing value, radius and shadow - one place to change the whole
  theme.
- **Mobile-first responsive design**: base styles target small phones;
  `@media (min-width: 600px)` and `@media (min-width: 900px)` add
  extra layout for tablets and desktops.
- **Flexbox and Grid**: Flexbox for one-dimensional rows (the nav bar,
  buttons), Grid for two-dimensional layouts (character cards, gallery,
  the mini map).
- **Pseudo-classes**: `:hover`, `:focus-visible`, `:last-child`,
  `:nth-child()`.
- **`prefers-reduced-motion`**: respects a visitor's operating-system
  setting to reduce animation.
- **BEM-style class naming** (e.g. `.character-card__name`,
  `.nav__toggle-bar`) to make it obvious which classes belong together.

## 5. JavaScript Concepts Used

| Feature | Concepts practiced |
|---|---|
| Mobile nav toggle | `classList.toggle`, ARIA attribute updates |
| Footer year | `new Date().getFullYear()` |
| Animated counters | `IntersectionObserver`, `setInterval`, `parseInt` |
| Character selector | `querySelectorAll`, `forEach`, `dataset`, template strings |
| Random route generator | Arrays, `Math.random()`, string building |
| Game tips rotator | Arrays, `setInterval`, `clearInterval`, the modulo operator (`%`) |
| Mini interactive map | `document.createElement()` in a loop, event listeners, the Fisher-Yates shuffle algorithm |
| "Ask Pip" AI demo | `setInterval` used to reveal items one at a time (a simple animation pattern) |
| FAQ accordion | Toggling the `hidden` attribute and `aria-expanded` |
| Contact form | `event.preventDefault()`, `form.reset()` |

None of this code uses advanced JavaScript (no classes, no async/await,
no build tooling) - every technique here is something a beginner can
learn and then find again in their own projects.

## 6. How Students Can Extend the Project

Try these as practice exercises, from easiest to hardest:

1. Add a fifth hero: draw a new `character-*.svg`, add a new button in
   the Characters section, and give it its own `data-*` attributes.
2. Add more entries to the `routeAdjectives` and `routeLandmarks`
   arrays in `script.js` so the Random Route Generator has more variety.
3. Change the mini map's size by editing `MAP_COLUMNS` and `MAP_ROWS`
   in `script.js` (remember to also update `grid-template-columns` in
   `style.css` to match).
4. Add a "dark mode / light mode" toggle button that swaps the CSS
   variables in `:root`.
5. Make the FAQ accordion remember which question was open using
   `localStorage`, so it's still open if the player refreshes the page.

## 7. Possible Week 2 Improvements

- Connect the contact form to a real backend (or a free form service)
  so messages are actually sent somewhere.
- Add simple form validation error messages next to each field instead
  of relying only on the browser's built-in validation styling.
- Make the character cards keyboard-navigable as a proper "radio group"
  using arrow keys, not just Tab + Enter.
- Add a light/dark theme switch and store the choice in `localStorage`.

## 8. Possible Week 3 Improvements

- Turn the mini interactive map into a real mini-game: require the
  player's tiles to connect edge-to-edge from Start to Home, and only
  count a route if it actually reaches Home.
- Add a simple scoreboard using `localStorage` that remembers a
  player's three best "Random Route Generator" scores.
- Animate section reveals on scroll using `IntersectionObserver` (the
  same tool used for the stat counters) applied to every section.
- Add unit tests for the pure logic functions (`randomNumberBetween`,
  `shuffleArray`) using a simple browser-based test runner.

## 9. Possible Week 4 Improvements

- Rebuild the mini map's route-scoring as a real pathfinding exercise:
  implement breadth-first search (BFS) to find the shortest path, then
  invert it to find the *longest simple path* Pip should suggest.
- Turn the whole page into a small multi-page site (Home, Characters,
  Gallery as separate HTML files) and teach shared headers/footers.
- Introduce a lightweight build step (just to demonstrate the idea) that
  bundles and minifies `style.css` and `script.js` for production.
- Deploy the finished project to GitHub Pages and set up a GitHub
  Actions workflow that runs automatically on every push.
