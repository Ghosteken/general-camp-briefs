/*
  FILE: script.js
  WHY:  This file adds INTERACTIVITY to the page - things that happen
        when a player clicks, scrolls, or types. HTML alone can't react
        to anything; JavaScript is the language that makes a webpage
        respond.
  WHAT: Each feature below lives in its own clearly-labelled section:
          1. Mobile navigation menu
          2. Footer copyright year
          3. Animated stat counters
          4. Character selector
          5. Random route generator
          6. Game tips rotator
          7. Mini interactive map + "Ask Pip" AI pathfinding demo
          8. FAQ accordion
          9. Contact form
  HOW:  index.html loads this file with the "defer" attribute, which
        means the browser waits until the whole page has been built
        before running any of this code. That's why we can safely use
        document.getElementById() everywhere without the element being
        missing yet.
*/

"use strict"; // catches a few common typos for us, like using a variable before creating it

/* ======================================================================
   SMALL HELPER FUNCTIONS
   These two helpers are used by more than one feature below, so we
   write them once here instead of repeating the same code everywhere.
   ====================================================================== */

// Returns a random whole number between min and max, including both ends.
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Returns a random item from an array.
function randomItemFrom(array) {
  var randomIndex = randomNumberBetween(0, array.length - 1);
  return array[randomIndex];
}

/* ======================================================================
   1. MOBILE NAVIGATION MENU
   WHY: On a small phone screen there isn't room for every nav link, so
        we hide them behind a hamburger button.
   HOW: Clicking the button flips aria-expanded between "true"/"false"
        and toggles the "is-open" class, which is what actually shows
        or hides the menu (see .nav__menu.is-open in style.css).
   ====================================================================== */
var navToggleButton = document.getElementById("nav-toggle");
var navMenu = document.getElementById("nav-menu");

navToggleButton.addEventListener("click", function () {
  var isCurrentlyOpen = navToggleButton.getAttribute("aria-expanded") === "true";
  navToggleButton.setAttribute("aria-expanded", String(!isCurrentlyOpen));
  navMenu.classList.toggle("is-open");
});

// If a player taps a link inside the mobile menu, close the menu so it
// doesn't stay open covering the section they just jumped to.
navMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("is-open");
    navToggleButton.setAttribute("aria-expanded", "false");
  });
});

/* ======================================================================
   2. FOOTER COPYRIGHT YEAR
   WHY: So nobody has to remember to update the copyright year by hand
        every January.
   HOW: `new Date()` gives today's date, and .getFullYear() pulls just
        the year number out of it.
   ====================================================================== */
document.getElementById("year").textContent = new Date().getFullYear();

/* ======================================================================
   3. ANIMATED STAT COUNTERS
   WHY: Numbers that count up feel more alive than numbers that just
        appear, and it draws the player's eye to the hero stats.
   WHAT: Each <span class="stat__number"> starts at 0 and has a
         data-target attribute with the number it should count up to.
   HOW: An IntersectionObserver watches the stats strip and tells us the
        exact moment it scrolls into view. Once that happens, we use
        setInterval to add a little bit to each number, again and
        again, until it reaches its target.
   ====================================================================== */
var statNumbers = document.querySelectorAll(".stat__number");
var countersHaveRun = false; // stops the animation from running more than once

function animateCounter(numberElement) {
  var target = parseInt(numberElement.getAttribute("data-target"), 10);
  var suffix = numberElement.getAttribute("data-suffix") || "";
  var currentValue = 0;
  // Bigger numbers should climb in bigger steps, so every counter
  // finishes in roughly the same amount of time (about 1.5 seconds).
  var stepSize = Math.max(1, Math.round(target / 60));

  var countingInterval = setInterval(function () {
    currentValue += stepSize;
    if (currentValue >= target) {
      currentValue = target; // never overshoot the real number
      clearInterval(countingInterval);
    }
    numberElement.textContent = currentValue + suffix;
  }, 25);
}

var statsObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting && !countersHaveRun) {
      countersHaveRun = true;
      statNumbers.forEach(animateCounter);
    }
  });
}, { threshold: 0.4 }); // fire once 40% of the stats strip is visible

var statsStrip = document.querySelector(".stats");
if (statsStrip) {
  statsObserver.observe(statsStrip);
}

/* ======================================================================
   4. CHARACTER SELECTOR
   WHY: Letting players pick a hero (and see their story) makes the
        game feel more personal.
   HOW: Every character card is a <button> holding its own info in
        data-* attributes. Clicking a card marks IT as selected and
        un-marks every other card, then fills in the detail panel using
        the data from that one card.
   ====================================================================== */
var characterCards = document.querySelectorAll(".character-card");
var characterDetail = document.getElementById("character-detail");

function selectCharacter(selectedCard) {
  characterCards.forEach(function (card) {
    var isSelected = card === selectedCard;
    card.classList.toggle("is-selected", isSelected);
    card.setAttribute("aria-pressed", String(isSelected));
  });

  characterDetail.innerHTML =
    "<h3>" + selectedCard.dataset.name + ", " + selectedCard.dataset.role + "</h3>" +
    "<p>" + selectedCard.dataset.ability + "</p>" +
    "<p>" + selectedCard.dataset.quote + "</p>";
}

characterCards.forEach(function (card) {
  card.addEventListener("click", function () {
    selectCharacter(card);
  });
});

/* ======================================================================
   5. RANDOM ROUTE GENERATOR
   WHY: Gives visitors a small taste of the game's core idea (random,
        rewarding detours) right on the landing page.
   HOW: We keep two small arrays of possible words. Math.random() picks
        one item from each array, plus a random distance and detour
        count, and we combine them into a "route card".
   ====================================================================== */
var routeAdjectives = [
  "Scenic", "Sneaky", "Sun-Baked", "Star-Lit",
  "Wobbly", "Overgrown", "Forgotten", "Breezy"
];

var routeLandmarks = [
  "the Whispering Forest", "the Sky Bridges", "a hidden waterfall",
  "the Village Crossroads", "an old watchtower", "the Mountain Pass",
  "a field of fireflies", "the Longest Bridge"
];

var generateRouteButton = document.getElementById("generate-route-btn");
var routeOutput = document.getElementById("route-output");

generateRouteButton.addEventListener("click", function () {
  var routeName = randomItemFrom(routeAdjectives) + " Route";
  var distanceInKm = randomNumberBetween(4, 38);
  var detoursFound = randomNumberBetween(0, 6);
  var landmarkPassed = randomItemFrom(routeLandmarks);
  var totalScore = (distanceInKm * 10) + (detoursFound * 25);

  routeOutput.innerHTML =
    "<dl>" +
    "<dt>Route Name</dt><dd>" + routeName + "</dd>" +
    "<dt>Distance</dt><dd>" + distanceInKm + " km</dd>" +
    "<dt>Detours Found</dt><dd>" + detoursFound + "</dd>" +
    "<dt>Landmark Passed</dt><dd>" + landmarkPassed + "</dd>" +
    "<dt>Total Score</dt><dd>" + totalScore + " pts</dd>" +
    "</dl>";
});

/* ======================================================================
   6. GAME TIPS ROTATOR
   WHY: A quick, fun way to teach players small strategies.
   HOW: An array of tip strings, plus an index number that tracks which
        tip is showing. setInterval automatically moves to the next tip
        every few seconds; the "Next Tip" button lets a player skip
        ahead whenever they want.
   ====================================================================== */
var gameTips = [
  "Landmarks are worth more points than plain trail tiles - always take the detour.",
  "Sable can travel safely at night, unlocking routes hidden during the day.",
  "The straightest path home is almost always the lowest-scoring one.",
  "Ask Pip for a route suggestion if you're not sure where the hidden trails are.",
  "Ruby never gets tired, so her routes can be twice as long as everyone else's.",
  "Bridges and sky platforms often hide bonus landmarks underneath them.",
  "Every new landmark you visit reveals one more hidden trail on the map."
];

var tipText = document.getElementById("tip-text");
var nextTipButton = document.getElementById("next-tip-btn");
var currentTipIndex = 0;
var TIP_ROTATE_DELAY_MS = 6000;

function showTip(index) {
  tipText.textContent = gameTips[index];
}

function goToNextTip() {
  currentTipIndex = (currentTipIndex + 1) % gameTips.length;
  showTip(currentTipIndex);
}

showTip(currentTipIndex); // show the first tip immediately, don't wait for the timer

var tipRotationTimer = setInterval(goToNextTip, TIP_ROTATE_DELAY_MS);

nextTipButton.addEventListener("click", function () {
  goToNextTip();
  // Restart the automatic timer so the tip doesn't jump again right
  // after the player just clicked for a new one.
  clearInterval(tipRotationTimer);
  tipRotationTimer = setInterval(goToNextTip, TIP_ROTATE_DELAY_MS);
});

/* ======================================================================
   7. MINI INTERACTIVE MAP + "ASK PIP" AI PATHFINDING DEMO
   WHY: This is the hands-on demo for the AI Pathfinding section. It
        lets players either build their own route by clicking tiles, or
        watch Pip (our AI companion) plot a long route automatically.
   WHAT: An 8-column by 5-row grid of tile buttons. The first tile is
        "Start" and the last tile is "Home" - both are fixed and can't
        be clicked. Every other tile can be toggled on and off.
   HOW: We build the grid with document.createElement() in a loop
        (there's no point typing out 40 buttons by hand in the HTML).
        "Ask Pip" shuffles the clickable tiles, picks a random handful
        of them, and reveals them one at a time with setInterval so it
        visually looks like the AI is "thinking" its way across the map.
   ====================================================================== */
var MAP_COLUMNS = 8;
var MAP_ROWS = 5;
var TOTAL_TILES = MAP_COLUMNS * MAP_ROWS;
var POINTS_PER_TILE = 5;

var mapGrid = document.getElementById("map-grid");
var mapScoreDisplay = document.getElementById("map-score");
var mapMessage = document.getElementById("map-message");
var askAiButton = document.getElementById("ask-ai-btn");
var resetMapButton = document.getElementById("reset-map-btn");

var allMapTiles = []; // every tile button, in order
var clickableTiles = []; // every tile except Start and Home

// --- Build the grid ---
for (var tileIndex = 0; tileIndex < TOTAL_TILES; tileIndex++) {
  var tile = document.createElement("button");
  tile.type = "button";
  tile.className = "map-tile";

  if (tileIndex === 0) {
    tile.classList.add("is-start");
    tile.textContent = "Start";
    tile.disabled = true;
  } else if (tileIndex === TOTAL_TILES - 1) {
    tile.classList.add("is-home");
    tile.textContent = "Home";
    tile.disabled = true;
  } else {
    tile.setAttribute("aria-label", "Route tile " + tileIndex);
    clickableTiles.push(tile);
  }

  mapGrid.appendChild(tile);
  allMapTiles.push(tile);
}

// --- Clicking a tile toggles it on/off and recalculates the score ---
clickableTiles.forEach(function (tile) {
  tile.addEventListener("click", function () {
    // A manual click always hands control of that tile back to the
    // player, even if Pip had suggested it a moment ago.
    tile.classList.remove("is-ai-suggested");
    tile.classList.toggle("is-selected");
    updateMapScore();
  });
});

function updateMapScore() {
  var selectedTileCount = mapGrid.querySelectorAll(".is-selected, .is-ai-suggested").length;
  mapScoreDisplay.textContent = selectedTileCount * POINTS_PER_TILE;
}

function clearMapSelections() {
  allMapTiles.forEach(function (tile) {
    tile.classList.remove("is-selected", "is-ai-suggested");
  });
  updateMapScore();
}

// Shuffles a copy of an array into a random order (the "Fisher-Yates
// shuffle" - a classic, simple way to shuffle a list fairly).
function shuffleArray(array) {
  var shuffled = array.slice(); // work on a copy, not the original array
  for (var i = shuffled.length - 1; i > 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var temp = shuffled[i];
    shuffled[i] = shuffled[randomIndex];
    shuffled[randomIndex] = temp;
  }
  return shuffled;
}

resetMapButton.addEventListener("click", function () {
  clearMapSelections();
  mapMessage.textContent = "";
});

askAiButton.addEventListener("click", function () {
  clearMapSelections();
  mapMessage.textContent = "Pip is scouting a longer route...";

  var shuffledTiles = shuffleArray(clickableTiles);
  var tileCountToPick = randomNumberBetween(18, 26);
  var chosenTiles = shuffledTiles.slice(0, tileCountToPick);
  var revealIndex = 0;

  var revealTimer = setInterval(function () {
    if (revealIndex >= chosenTiles.length) {
      clearInterval(revealTimer);
      mapMessage.textContent =
        "Pip plotted a route worth " + (chosenTiles.length * POINTS_PER_TILE) +
        " points. That's the long way home!";
      return;
    }
    chosenTiles[revealIndex].classList.add("is-ai-suggested");
    updateMapScore();
    revealIndex++;
  }, 60);
});

/* ======================================================================
   8. FAQ ACCORDION
   WHY: Keeps the FAQ section compact - only the question a player is
        curious about needs to take up space on the screen.
   HOW: Every question button has aria-expanded="false" and its matching
        answer starts with the "hidden" attribute. Clicking a question
        flips both of those, and closes any other answer that was open.
   ====================================================================== */
var accordionTriggers = document.querySelectorAll(".accordion-trigger");

accordionTriggers.forEach(function (trigger) {
  trigger.addEventListener("click", function () {
    var panel = document.getElementById(trigger.getAttribute("aria-controls"));
    var isCurrentlyOpen = trigger.getAttribute("aria-expanded") === "true";

    // Close every other answer first, so only one is open at a time.
    accordionTriggers.forEach(function (otherTrigger) {
      otherTrigger.setAttribute("aria-expanded", "false");
      document.getElementById(otherTrigger.getAttribute("aria-controls")).hidden = true;
    });

    // Then open this one, unless it was already open (in which case we
    // just leave everything closed).
    if (!isCurrentlyOpen) {
      trigger.setAttribute("aria-expanded", "true");
      panel.hidden = false;
    }
  });
});

/* ======================================================================
   9. CONTACT FORM
   WHY: Demonstrates a real, working contact form pattern - without
        needing a real server to send the message to.
   HOW: The "required" and type="email" attributes in the HTML make the
        browser check the form automatically. Our code only runs once
        the form is already valid, so all we need to do is stop the
        page from reloading (preventDefault), show a thank-you message,
        and clear the fields.
   ====================================================================== */
var contactForm = document.getElementById("contact-form");
var formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the browser from trying to reload the page

  var nameValue = document.getElementById("contact-name").value;
  formStatus.textContent = "Thanks, " + nameValue + "! Pip has logged your message and someone will reply soon.";
  contactForm.reset();
});
