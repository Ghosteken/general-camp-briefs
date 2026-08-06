/*
============================================================
AVATARVERSE — js/script.js
============================================================
WHY THIS FILE EXISTS
  HTML is the skeleton, CSS is the look — JavaScript is what
  makes the page REACT to the user. Every button click, every
  menu opening, every random quote comes from the code below.

WHAT THIS FILE DOES
  It is split into small, independent features. Each one:
    1. Mobile navigation menu (hamburger open/close)
    2. Theme switch (dark <-> light, remembered with localStorage)
    3. Fade-in-on-scroll for sections (IntersectionObserver)
    4. Random hero quote generator
    5. Character card flip
    6. Image lightbox for the gallery
    7. FAQ accordion
    8. Contact form validation + fake "submit"
    9. Back-to-top button
    10. Footer year (small finishing touch)

HOW IT WORKS (the big idea)
  Almost every feature follows the same 3-step pattern:
    a. Find the HTML element(s) with document.querySelector
    b. Listen for an event (like "click") with addEventListener
    c. Change something on the page in response (add/remove a
       CSS class, change text, etc.)

  We never touch <style> rules directly from JavaScript.
  Instead we add/remove CSS CLASSES (like "is-open") and let
  style.css decide what those classes actually look like.
  This keeps "how it looks" and "when it happens" separate.
============================================================
*/

/* ============================================================
   1. MOBILE NAVIGATION MENU
   HOW: Clicking the hamburger button toggles two classes:
   "is-open" on the menu (so it slides open) and on the
   hamburger icon itself (so its bars turn into an "X").
============================================================ */
const menuToggleButton = document.getElementById("menuToggle");
const mainNav = document.getElementById("main-nav");

menuToggleButton.addEventListener("click", function () {
  const isOpen = mainNav.classList.toggle("is-open");
  menuToggleButton.classList.toggle("is-open", isOpen);

  // aria-expanded tells screen readers whether the menu is
  // currently open or closed — good practice for accessibility.
  menuToggleButton.setAttribute("aria-expanded", isOpen);
});

// When a visitor taps a nav link on mobile, close the menu so
// it doesn't stay open covering the section they just jumped to.
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    mainNav.classList.remove("is-open");
    menuToggleButton.classList.remove("is-open");
    menuToggleButton.setAttribute("aria-expanded", "false");
  });
});

/* ============================================================
   2. THEME SWITCH (dark <-> light)
   HOW: We toggle a "light-theme" class on <body>. All of the
   actual color values live in css/style.css under
   "body.light-theme { ... }" — this file only flips the switch.
   We also save the choice in localStorage, a small storage box
   built into the browser, so the theme is remembered next time
   this visitor opens the site.
============================================================ */
const themeToggleButton = document.getElementById("themeToggle");
const STORAGE_KEY = "avatarverse-theme";

function applyTheme(theme) {
  const isLight = theme === "light";
  document.body.classList.toggle("light-theme", isLight);
  themeToggleButton.textContent = isLight ? "☀️" : "🌙";
}

// On page load, check if a theme was saved from a previous visit
const savedTheme = localStorage.getItem(STORAGE_KEY);
if (savedTheme) {
  applyTheme(savedTheme);
}

themeToggleButton.addEventListener("click", function () {
  const isCurrentlyLight = document.body.classList.contains("light-theme");
  const nextTheme = isCurrentlyLight ? "dark" : "light";

  applyTheme(nextTheme);
  localStorage.setItem(STORAGE_KEY, nextTheme);
});

/* ============================================================
   3. FADE-IN SECTIONS WHEN SCROLLED INTO VIEW
   HOW: IntersectionObserver quietly watches each ".fade-in"
   section and tells us the moment it enters the screen. When
   that happens, we add "is-visible", and style.css handles the
   actual fade + slide animation with a CSS transition.
============================================================ */
const fadeSections = document.querySelectorAll(".fade-in");

const fadeInObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        // Once it has faded in, we don't need to watch it anymore
        fadeInObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 } // fire when 15% of the section is visible
);

fadeSections.forEach(function (section) {
  fadeInObserver.observe(section);
});

/* ============================================================
   4. RANDOM HERO QUOTE
   HOW: We keep a plain array of quote objects. On page load
   (and whenever the "New Quote" button is clicked) we pick a
   random index and display that quote.
============================================================ */
const heroQuotes = [
  { text: "Every legend starts with a single spawn point.", author: "Nova" },
  { text: "Speed means nothing without a plan.", author: "Echo" },
  { text: "A shield is just a promise you keep to your squad.", author: "Titan" },
  { text: "The multiverse doesn't wait for the ready.", author: "Blaze" },
  { text: "Play smart. Play together. Play AvatarVerse.", author: "AvatarVerse Team" },
];

const quoteTextElement = document.getElementById("quoteText");
const quoteAuthorElement = document.getElementById("quoteAuthor");
const newQuoteButton = document.getElementById("newQuoteBtn");

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * heroQuotes.length);
  const chosenQuote = heroQuotes[randomIndex];

  quoteTextElement.textContent = `"${chosenQuote.text}"`;
  quoteAuthorElement.textContent = chosenQuote.author;
}

showRandomQuote(); // show one immediately when the page loads
newQuoteButton.addEventListener("click", showRandomQuote);

/* ============================================================
   5. CHARACTER CARD FLIP
   HOW: Each character is a <button class="character-card">.
   Clicking it toggles "is-flipped", and style.css rotates the
   card 180 degrees to reveal the stats printed on the back face.
============================================================ */
const characterCards = document.querySelectorAll(".character-card");

characterCards.forEach(function (card) {
  card.addEventListener("click", function () {
    card.classList.toggle("is-flipped");
  });
});

/* ============================================================
   6. IMAGE LIGHTBOX (Gallery)
   HOW: Every gallery thumbnail is a button with a
   data-index="0/1/2..." attribute. Clicking one opens the
   lightbox overlay and loads that image at full size. The
   prev/next buttons just move the index up or down by one.
============================================================ */
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

let currentImageIndex = 0;

function openLightbox(index) {
  currentImageIndex = index;
  const item = galleryItems[currentImageIndex];
  const image = item.querySelector("img");

  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = image.alt;

  lightbox.hidden = false;
}

function closeLightbox() {
  lightbox.hidden = true;
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
  openLightbox(currentImageIndex);
}

function showPreviousImage() {
  currentImageIndex =
    (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
  openLightbox(currentImageIndex);
}

galleryItems.forEach(function (item, index) {
  item.addEventListener("click", function () {
    openLightbox(index);
  });
});

lightboxClose.addEventListener("click", closeLightbox);
lightboxNext.addEventListener("click", showNextImage);
lightboxPrev.addEventListener("click", showPreviousImage);

// Clicking the dark background (but not the image itself) also closes it
lightbox.addEventListener("click", function (event) {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

// Let keyboard users close with Escape and browse with arrow keys
document.addEventListener("keydown", function (event) {
  if (lightbox.hidden) return; // do nothing if the lightbox isn't open

  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowRight") showNextImage();
  if (event.key === "ArrowLeft") showPreviousImage();
});

/* ============================================================
   7. FAQ ACCORDION
   HOW: Clicking a question toggles "is-open" on its parent
   ".faq-item". style.css uses that class to expand/collapse
   the answer. We also flip aria-expanded for screen readers.
============================================================ */
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {
  question.addEventListener("click", function () {
    const faqItem = question.closest(".faq-item");
    const isOpen = faqItem.classList.toggle("is-open");

    question.setAttribute("aria-expanded", isOpen);
  });
});

/* ============================================================
   8. CONTACT FORM
   HOW: There is no real server here, so we "preventDefault()"
   to stop the browser from trying to submit anywhere. Instead
   we do a simple check that every field has a value, then show
   a friendly thank-you message and clear the form.
============================================================ */
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading

  const nameValue = document.getElementById("nameInput").value.trim();
  const emailValue = document.getElementById("emailInput").value.trim();
  const messageValue = document.getElementById("messageInput").value.trim();

  if (!nameValue || !emailValue || !messageValue) {
    formStatus.textContent = "⚠️ Please fill in every field before sending.";
    return;
  }

  formStatus.textContent = `✅ Thanks, ${nameValue}! Your message has been sent.`;
  contactForm.reset();
});

/* ============================================================
   9. BACK-TO-TOP BUTTON
   HOW: We listen to the page "scroll" event. Once the visitor
   has scrolled past 400 pixels, the button becomes visible.
   Clicking it scrolls smoothly back to the very top.
============================================================ */
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  const hasScrolledDown = window.scrollY > 400;
  backToTopButton.classList.toggle("is-visible", hasScrolledDown);
});

backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ============================================================
   10. FOOTER YEAR
   HOW: A tiny touch — instead of typing "2026" by hand in the
   HTML (which we'd have to remember to update every year), we
   ask JavaScript's built-in Date object for the current year.
============================================================ */
document.getElementById("currentYear").textContent = new Date().getFullYear();
