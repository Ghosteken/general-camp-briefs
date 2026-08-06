# AvatarVerse 🎮

A futuristic gaming website built as a teaching project for the coding
bootcamp. It's a single HTML page, styled with plain CSS, and brought to
life with plain (vanilla) JavaScript — **no frameworks, no build tools,
no internet connection required.** Just open `index.html` in a browser.

---

## 1. Project Overview

AvatarVerse is a fictional online arena game. The website introduces the
game, shows off its playable "avatars" (characters), lists features,
displays a screenshot gallery, offers downloads, answers FAQs, and takes
contact messages — all on one scrolling page.

It was built specifically to be **read and explained line by line**.
Every file starts with a comment block explaining:

- **WHY** the file exists
- **WHAT** each section does
- **HOW** it works

Students should be able to open any file, read the comments top to
bottom, and understand the whole thing without outside help.

### Design theme

| Requirement | How it's used |
|---|---|
| Colors | Black, dark blue, purple, and neon cyan — defined once as CSS variables in `css/style.css` |
| Animations | Smooth scrolling, hover effects, fade-in-on-scroll, and glowing button animations |
| Layout | Mobile-first responsive grid (1 column on phones → up to 4 columns on desktop) |

---

## 2. Folder Structure

```
avatarverse/
├── index.html          ← all page content & structure
├── css/
│   └── style.css       ← all colors, layout & animations
├── js/
│   └── script.js       ← all interactivity
├── images/             ← SVG artwork (logo, characters, gallery)
└── README.md           ← this file
```

**Why SVG images instead of photos/JPGs?**
SVGs are just text files (you can open `images/character-nova.svg` in a
text editor and read it!), so nothing needs downloading and nothing ever
shows a "broken image" icon. When this becomes a real project, swap any
`images/*.svg` file for a real `.png` or `.jpg` with the **same
filename** and the site keeps working — no HTML changes needed.

---

## 3. HTML Concepts Used

- **Semantic elements** — `<header>`, `<nav>`, `<main>`, `<section>`,
  `<footer>`, `<blockquote>`, `<form>` instead of generic `<div>`s
  everywhere. Screen readers and search engines understand these.
- **One page, many anchors** — every section has an `id` (e.g.
  `id="about"`), and nav links jump to them with `href="#about"`.
- **Accessibility attributes** — `alt` text on every image,
  `aria-label`, `aria-expanded`, `aria-controls`, and a "skip to
  content" link for keyboard users.
- **Forms** — `<label for="...">`, `required`, `type="email"`, so the
  browser itself checks basic input before JavaScript even runs.
- **`<template>`-free reuse** — the four character cards and six
  gallery items are repeated by hand so students can see the full
  pattern without learning `<template>` or JS-side templating yet.

---

## 4. CSS Concepts Used

- **CSS variables (custom properties)** — the whole color palette
  lives in `:root { --color-cyan: ...; }`. Change one line, the whole
  site updates.
- **Mobile-first responsive design** — base styles target phones;
  `@media (min-width: ...)` blocks near the bottom of `style.css` add
  extra layout for tablets and desktops.
- **Flexbox** — navigation bar, buttons, footer.
- **CSS Grid** — character cards, feature cards, gallery, download cards.
- **Transitions** — hover lifts on buttons/cards, color fades on the
  theme switch.
- **Keyframe animation** — the pulsing glow behind the hero heading.
- **3D transforms** — the character card flip uses
  `transform-style: preserve-3d`, `perspective`, and
  `backface-visibility: hidden`.
- **`prefers`-free theme switching** — a single `.light-theme` class on
  `<body>` re-defines the same CSS variables to different values.

---

## 5. JavaScript Concepts Used

Every feature below is plain, beginner-level JavaScript — no external
libraries, no advanced syntax.

| Feature | JS concepts practiced |
|---|---|
| Mobile nav menu | `querySelector`, `classList.toggle`, `addEventListener` |
| Theme switch | `classList.toggle`, `localStorage` (remembers your choice) |
| Fade-in sections | `IntersectionObserver` (watches when something scrolls into view) |
| Random hero quote | Arrays of objects, `Math.random()`, `Math.floor()` |
| Character card flip | `classList.toggle`, event listeners on multiple elements via `forEach` |
| Image lightbox | `data-*` attributes, template literals, keyboard events (`Escape`, arrow keys) |
| FAQ accordion | `closest()`, toggling a class to expand/collapse |
| Contact form | `event.preventDefault()`, basic validation, `form.reset()` |
| Back-to-top button | `window.addEventListener("scroll", ...)`, `scrollTo()` |
| Footer year | Built-in `Date` object |

`script.js` never touches CSS styles directly — it only adds or removes
class names, and `style.css` decides what those classes look like. This
separation is the single most important pattern in the whole project.

---

## 6. How Students Can Extend the Project

Easy wins to try first:

- Add a 5th character card (copy an existing one, change the text and
  image, add a new quote for them).
- Add more hero quotes to the `heroQuotes` array in `script.js`.
- Change the color palette by editing the `:root` variables in
  `style.css` — try a "green matrix" or "red alert" theme.
- Replace an `images/*.svg` placeholder with a real drawing or photo
  (keep the same filename).

---

## 7. Possible Week 2 Improvements

- Add real `.png`/`.jpg` artwork for characters and gallery, drawn or
  found by students (with permission/free-to-use license).
- Add a **character filter** (buttons like "Show only Tanks") using
  `Array.filter()`.
- Add simple **CSS animations on page load** (e.g., hero text sliding
  in) using `@keyframes` and the `animation` property.
- Improve form validation with inline error messages under each field
  instead of one shared status message.

## 8. Possible Week 3 Improvements

- Persist the contact form's last submission in `localStorage` so it's
  pre-filled if the user comes back.
- Add a **search bar** for the FAQ section that hides non-matching
  questions as you type.
- Turn the character stats into an interactive **radar/bar chart**
  drawn with plain `<canvas>` (still no libraries).
- Add sound effects on button clicks using the built-in `Audio` object.

## 9. Possible Week 4 Improvements

- Introduce a simple **JSON data file** for characters/gallery, and
  have JavaScript build the cards dynamically with a loop — this is the
  first step toward "separating data from markup."
- Add a **light/dark auto-detect** on first visit using
  `window.matchMedia("(prefers-color-scheme: dark)")`, before falling
  back to the manual toggle.
- Deploy the finished site to **GitHub Pages** and connect a custom
  domain.
- Refactor `script.js` into smaller files (e.g. `nav.js`, `gallery.js`)
  and load them with multiple `<script>` tags — a gentle first step
  toward thinking in modules.

---

## Running the Project

No installation, no server, no build step.

1. Download or clone this folder.
2. Double-click `index.html` (or right-click → **Open with** → your
   browser).
3. That's it — the whole site runs locally.
