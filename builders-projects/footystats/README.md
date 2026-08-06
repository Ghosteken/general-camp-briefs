# ⚽ Footy Stats

A demo football (soccer) analytics website, built entirely with **HTML5,
CSS3 and Vanilla JavaScript** — no frameworks, no build tools, no
external libraries. Just open `index.html` in a browser and everything
works.

This project was built as a **teaching tool** for a coding bootcamp.
Every file is heavily commented to explain not just *what* the code
does, but *why* it exists and *how* it works, so it can be read and
explained line-by-line to beginners.

---

## 1. Project Overview

Footy Stats is a single-page website with ten sections: a navigation
bar, a hero banner with animated statistics, a latest matches grid
(with a star rating feature), a searchable player statistics table, a
league standings table, a filterable "Top Players" card grid with
favouriting, a photo gallery, an about section, a contact form, and a
footer.

There is no server and no real database — all match/player/table data
lives directly inside `js/script.js` as plain JavaScript arrays. This
keeps the project 100% static, so it can run just by double-clicking
`index.html`, with nothing to install.

---

## 2. Folder Structure

```
footystats/
├── index.html          # The one page — structure & content for every section
├── css/
│   └── style.css       # All visual styling, written mobile-first
├── js/
│   └── script.js        # All data + interactivity (search, filters, ratings…)
├── images/
│   ├── hero-bg.svg      # Hand-drawn SVG background for the hero banner
│   └── gallery-1.svg … gallery-6.svg   # Hand-drawn SVG gallery placeholders
└── README.md            # You are here
```

Team badges and player avatars are **not** image files — they're small
circles built with plain CSS + the team/player's initials. This is a
deliberate teaching choice: it shows students that not everything
needs an image, and reduces how many placeholder assets the project
depends on. Swapping in real photos later is as simple as replacing
those CSS-generated circles with `<img>` tags.

---

## 3. HTML Concepts Used

- **Semantic elements**: `<header>`, `<nav>`, `<main>`, `<section>`,
  `<article>`, `<figure>`/`<figcaption>`, `<footer>` — each tag
  describes what its content *means*, not just how it looks.
- **Accessibility (a11y)**: a "skip to main content" link, `aria-*`
  attributes (`aria-expanded`, `aria-label`, `aria-controls`,
  `aria-hidden`), a visually-hidden helper class for screen-reader-only
  text, `<label for="">` linked to inputs, and `role="status"` for
  form feedback that should be announced automatically.
- **Forms**: `<input type="search">`, `<input type="email">`, and
  built-in HTML validation attributes (`required`, `minlength`,
  `type="email"`) that the browser checks for free.
- **`data-*` attributes**: custom attributes like `data-target`,
  `data-filter` and `data-position` used to attach extra information
  to elements for JavaScript to read later.
- **The viewport meta tag**, which is what makes mobile-first CSS
  actually take effect on real phones.

## 4. CSS Concepts Used

- **CSS custom properties (variables)** in `:root` for a single source
  of truth for the colour palette (dark green, white, black, gold) and
  spacing scale.
- **Mobile-first responsive design**: base styles target small
  screens, with `@media (min-width: ...)` queries progressively adding
  more elaborate layouts for tablets and desktops.
- **Flexbox** (navigation bar, hero content, buttons, footer) and
  **CSS Grid** (match cards, player cards, gallery, stat cards) used
  side-by-side, each where it fits best.
- **Sticky positioning** (`position: sticky`) for the header and table
  headers.
- **Transitions and simple animation** for hover states, the mobile
  menu, and the hamburger-to-X icon morph.
- **`prefers-reduced-motion`** media query, respecting visitors who've
  asked their OS to minimise animation.

## 5. JavaScript Concepts Used

- **Arrays of objects** as a simple, readable way to store sample data
  (`matches`, `players`, `leagueTable`).
- **Array methods**: `.map()`, `.join()`, `.filter()`, `.includes()`
  to transform data into HTML and to search/update lists.
- **Template literals** (backtick strings with `${...}`) to build HTML
  snippets from data.
- **DOM manipulation**: `getElementById`, `querySelectorAll`,
  `.innerHTML`, `.textContent`, `.classList.toggle/add/remove`.
- **Event listeners**: `click`, `input`, `submit`, plus **event
  delegation** (listening on a parent container instead of every
  individual button) for the star ratings and favourite buttons.
- **`localStorage`**: saving favourite players and match ratings so
  they're remembered the next time the page is opened, using
  `JSON.stringify`/`JSON.parse` to convert data to and from text.
- **`setInterval`/`clearInterval`** to animate the hero's counting-up
  numbers.
- **Built-in form validation** via `.checkValidity()`, paired with
  `event.preventDefault()` to stop the page reloading on submit.

---

## 6. How Students Can Extend the Project

- Add a new player to the `players` array in `js/script.js` and watch
  them automatically appear in both the stats table *and* the Top
  Players grid — no HTML editing required.
- Add a new match to the `matches` array and it will show up in
  Latest Matches with its own working star rating.
- Try changing the CSS variables in `:root` (`css/style.css`) to
  re-theme the whole site with different colours.
- Add a new filter category (e.g. split "forward" into "striker" and
  "winger") by adding a new button with a matching `data-filter` value.

## 7. Possible Week 2 Improvements

- Add sorting to the League Table (click a column header to sort by
  points, goal difference, etc).
- Add a "Clear My Favourites" button that empties `localStorage`.
- Add simple client-side pagination to the player table once the list
  of players grows large.

## 8. Possible Week 3 Improvements

- Replace the CSS-generated avatars/badges with real `<img>` files and
  teach `srcset`/responsive images.
- Add a dark mode toggle using a second set of CSS variables.
- Add keyboard navigation for the star rating widget (arrow keys).

## 9. Possible Week 4 Improvements

- Fetch real data from a public football API using the `fetch()`
  function, replacing the hard-coded arrays (a great first step into
  working with real APIs and asynchronous JavaScript).
- Add a lightweight client-side router so each section becomes its own
  "page" with its own URL.
- Persist the contact form submissions using a small backend (e.g. a
  simple Node.js/Express server) as a first introduction to full-stack
  development.
