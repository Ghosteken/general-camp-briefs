/* =====================================================================
   FOOTY STATS — js/script.js
   =====================================================================
   WHY THIS FILE EXISTS
     HTML builds the page, CSS makes it look good, and JavaScript
     makes it REACT to the visitor: typing in a search box, clicking a
     button, or the page loading for the first time. Everything in
     this file either (a) builds HTML content dynamically from data,
     or (b) listens for something happening and responds to it.

   HOW THIS FILE IS ORGANISED
     1. Sample data (the "database" for this demo — normally this
        would come from a real server, but for learning purposes we
        just store it directly in JavaScript arrays of objects).
     2. Small helper functions used in more than one place.
     3. One block per feature:
          - Mobile navigation menu
          - Animated hero statistics
          - Latest matches + match rating
          - Player search + stats table
          - League table
          - Top players + filter cards + favourites
          - Contact form validation
     4. An "init" section at the very bottom that calls everything
        once the page has loaded.

   A NOTE ON HOW WE READ/WRITE THE PAGE
     document.getElementById("some-id") finds the ONE element with
     that id. document.querySelectorAll(".some-class") finds EVERY
     element with that class, as a list we can loop over. Once we
     have an element, we can change what's inside it with
     .innerHTML or .textContent, or listen for events with
     .addEventListener(...).
   ===================================================================== */


/* ---------------------------------------------------------------------
   1. SAMPLE DATA
   In a real product this would come from a server/database. Here we
   just describe it as plain JavaScript arrays so the whole project
   still runs by simply opening index.html — no internet required.
   --------------------------------------------------------------------- */

// Every match card on the page is generated from one of these objects.
const matches = [
    { id: 1, competition: "Youth League — Matchweek 12", homeTeam: "Gold Lions", awayTeam: "Emerald United", homeScore: 3, awayScore: 1, date: "12 Jul 2026" },
    { id: 2, competition: "Youth League — Matchweek 12", homeTeam: "Ivory Rangers", awayTeam: "Sapphire Strikers", homeScore: 0, awayScore: 0, date: "12 Jul 2026" },
    { id: 3, competition: "Youth League — Matchweek 12", homeTeam: "Crimson Hawks", awayTeam: "Silver Wolves", homeScore: 2, awayScore: 2, date: "13 Jul 2026" },
    { id: 4, competition: "Youth League — Matchweek 13", homeTeam: "Obsidian FC", awayTeam: "Coral City", homeScore: 1, awayScore: 4, date: "19 Jul 2026" },
    { id: 5, competition: "Youth League — Matchweek 13", homeTeam: "Emerald United", awayTeam: "Ivory Rangers", homeScore: 2, awayScore: 1, date: "19 Jul 2026" },
    { id: 6, competition: "Youth League — Matchweek 13", homeTeam: "Gold Lions", awayTeam: "Silver Wolves", homeScore: 3, awayScore: 0, date: "20 Jul 2026" },
];

// Every row in the player table AND every card in "Top Players" comes
// from this same list — we render it two different ways (see the
// render functions below), so we never repeat the data itself.
const players = [
    { id: 1, name: "Marcus Bello", position: "forward", team: "Gold Lions", appearances: 21, goals: 18, assists: 5 },
    { id: 2, name: "Femi Adaora", position: "midfielder", team: "Emerald United", appearances: 22, goals: 7, assists: 14 },
    { id: 3, name: "Tunde Bakare", position: "defender", team: "Ivory Rangers", appearances: 20, goals: 2, assists: 3 },
    { id: 4, name: "Chidi Okafor", position: "goalkeeper", team: "Sapphire Strikers", appearances: 22, goals: 0, assists: 0 },
    { id: 5, name: "Ola Nwachukwu", position: "forward", team: "Crimson Hawks", appearances: 19, goals: 15, assists: 6 },
    { id: 6, name: "Segun Alabi", position: "midfielder", team: "Silver Wolves", appearances: 21, goals: 5, assists: 11 },
    { id: 7, name: "Ibrahim Musa", position: "defender", team: "Obsidian FC", appearances: 18, goals: 1, assists: 2 },
    { id: 8, name: "David Umeh", position: "goalkeeper", team: "Coral City", appearances: 22, goals: 0, assists: 1 },
    { id: 9, name: "Kola Fashola", position: "forward", team: "Emerald United", appearances: 20, goals: 12, assists: 8 },
    { id: 10, name: "Ahmed Yusuf", position: "defender", team: "Gold Lions", appearances: 22, goals: 3, assists: 4 },
];

// Position -> key stat mapping, used when building "Top Players" cards
// so a goalkeeper shows "Clean Sheets"-style info instead of "Goals".
const keyStatByPosition = {
    forward: { label: "Goals", value: (player) => player.goals },
    midfielder: { label: "Assists", value: (player) => player.assists },
    defender: { label: "Appearances", value: (player) => player.appearances },
    goalkeeper: { label: "Appearances", value: (player) => player.appearances },
};

// Every row in the League Table section.
const leagueTable = [
    { position: 1, team: "Gold Lions", played: 13, won: 10, drawn: 2, lost: 1, goalDifference: 21 },
    { position: 2, team: "Emerald United", played: 13, won: 9, drawn: 3, lost: 1, goalDifference: 17 },
    { position: 3, team: "Coral City", played: 13, won: 8, drawn: 2, lost: 3, goalDifference: 12 },
    { position: 4, team: "Crimson Hawks", played: 13, won: 7, drawn: 4, lost: 2, goalDifference: 9 },
    { position: 5, team: "Sapphire Strikers", played: 13, won: 6, drawn: 3, lost: 4, goalDifference: 3 },
    { position: 6, team: "Ivory Rangers", played: 13, won: 5, drawn: 4, lost: 4, goalDifference: -1 },
    { position: 7, team: "Silver Wolves", played: 13, won: 4, drawn: 2, lost: 7, goalDifference: -8 },
    { position: 8, team: "Obsidian FC", played: 13, won: 1, drawn: 2, lost: 10, goalDifference: -19 },
];


/* ---------------------------------------------------------------------
   2. SMALL HELPER FUNCTIONS
   --------------------------------------------------------------------- */

// Turns "Gold Lions" into "GL" — used for the little team badge circles
// so we don't need a real logo image file for every team.
function getInitials(teamName) {
    return teamName
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase();
}

// localStorage lets a website remember small pieces of information in
// the visitor's own browser, even after the page is closed and
// reopened. It only stores TEXT, so we use JSON.stringify/parse to
// convert our JavaScript objects/arrays to and from text.
function loadFromStorage(key, fallbackValue) {
    const savedText = localStorage.getItem(key);
    if (!savedText) {
        return fallbackValue;
    }
    try {
        return JSON.parse(savedText);
    } catch (error) {
        // If the saved text is ever corrupted, fall back safely instead
        // of breaking the whole page.
        return fallbackValue;
    }
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Favourite player ids are stored as a simple array of numbers, e.g. [1, 5].
let favouritePlayerIds = loadFromStorage("footystats-favourites", []);

// Match ratings are stored as an object like { "1": 4, "3": 5 } where
// the key is the match id and the value is the star rating (1-5).
let matchRatings = loadFromStorage("footystats-match-ratings", {});


/* ---------------------------------------------------------------------
   3a. MOBILE NAVIGATION MENU
   WHAT: Toggles the dropdown menu open/closed when the hamburger
         button is tapped, and closes it again after a link is chosen
         (so the menu doesn't stay open after navigating on mobile).
   --------------------------------------------------------------------- */
function setupMobileNav() {
    const toggleButton = document.getElementById("nav-toggle-btn");
    const nav = document.getElementById("primary-navigation");

    toggleButton.addEventListener("click", () => {
        // .toggle() adds a class if it's missing, or removes it if it's
        // already there — perfect for an on/off switch like this menu.
        const isOpen = nav.classList.toggle("is-open");
        toggleButton.classList.toggle("is-open", isOpen);

        // Keep the aria-expanded attribute in sync so screen readers
        // correctly announce "expanded" or "collapsed".
        toggleButton.setAttribute("aria-expanded", String(isOpen));
        toggleButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    // Close the menu automatically once a visitor clicks a link inside it.
    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("is-open");
            toggleButton.classList.remove("is-open");
            toggleButton.setAttribute("aria-expanded", "false");
            toggleButton.setAttribute("aria-label", "Open menu");
        });
    });
}


/* ---------------------------------------------------------------------
   3b. ANIMATED HERO STATISTICS
   WHAT: Every element with class="stat-number" starts at 0 in the
         HTML. This function counts each one up to its real value
         (stored in the data-target attribute) using small, repeated
         steps — similar to a car's odometer spinning up.
   HOW: setInterval() repeatedly runs a function every X milliseconds
        until we tell it to stop with clearInterval().
   --------------------------------------------------------------------- */
function animateStatNumber(statElement) {
    const targetValue = Number(statElement.dataset.target);
    const animationDurationMs = 1200;
    const steps = 40;
    const stepDurationMs = animationDurationMs / steps;
    const incrementPerStep = targetValue / steps;

    let currentValue = 0;
    let stepsCompleted = 0;

    const timerId = setInterval(() => {
        stepsCompleted++;
        currentValue += incrementPerStep;

        if (stepsCompleted >= steps) {
            // Land exactly on the real number so rounding never leaves
            // us one short (or one over).
            statElement.textContent = targetValue;
            clearInterval(timerId);
        } else {
            statElement.textContent = Math.round(currentValue);
        }
    }, stepDurationMs);
}

function setupAnimatedStats() {
    const statNumbers = document.querySelectorAll(".stat-number");
    statNumbers.forEach(animateStatNumber);
}


/* ---------------------------------------------------------------------
   3c. LATEST MATCHES + MATCH RATING
   WHAT: Builds one "match card" per entry in the `matches` array, and
         wires up a 1-5 star rating control on every card.
   --------------------------------------------------------------------- */

// Builds the HTML string for the 5 star buttons inside one match card.
// currentRating is a number 0-5 (0 means "not rated yet").
function buildStarButtons(matchId, currentRating) {
    let starsHtml = "";

    for (let starValue = 1; starValue <= 5; starValue++) {
        const isFilled = starValue <= currentRating;
        starsHtml += `
            <button
                type="button"
                class="star-btn ${isFilled ? "is-filled" : ""}"
                data-match-id="${matchId}"
                data-star-value="${starValue}"
                aria-label="Rate this match ${starValue} out of 5 stars"
            >★</button>
        `;
    }

    return starsHtml;
}

// Builds the full HTML for one match card.
function buildMatchCardHtml(match) {
    const currentRating = matchRatings[match.id] || 0;

    return `
        <article class="match-card">
            <p class="match-competition">${match.competition}</p>
            <div class="match-teams">
                <div class="match-team">
                    <div class="team-badge" aria-hidden="true">${getInitials(match.homeTeam)}</div>
                    ${match.homeTeam}
                </div>
                <p class="match-score">${match.homeScore} : ${match.awayScore}</p>
                <div class="match-team">
                    <div class="team-badge" aria-hidden="true">${getInitials(match.awayTeam)}</div>
                    ${match.awayTeam}
                </div>
            </div>
            <p class="match-date">${match.date}</p>
            <div class="match-rating" data-match-id="${match.id}">
                ${buildStarButtons(match.id, currentRating)}
            </div>
        </article>
    `;
}

function renderMatches() {
    const matchesGrid = document.getElementById("matches-grid");

    // .map() turns our array of match OBJECTS into an array of HTML
    // STRINGS (one per match), and .join("") glues them all together
    // into one big string we can drop into the page in one go.
    matchesGrid.innerHTML = matches.map(buildMatchCardHtml).join("");
}

// Handles a click anywhere inside the matches grid. We attach ONE
// listener to the whole grid (instead of one per star button) using a
// technique called "event delegation" — clicks bubble up from the
// star button to the grid, and we check what was actually clicked.
function setupMatchRating() {
    const matchesGrid = document.getElementById("matches-grid");

    matchesGrid.addEventListener("click", (event) => {
        const clickedStar = event.target.closest(".star-btn");
        if (!clickedStar) {
            return; // The click wasn't on a star button, ignore it.
        }

        const matchId = Number(clickedStar.dataset.matchId);
        const chosenRating = Number(clickedStar.dataset.starValue);

        matchRatings[matchId] = chosenRating;
        saveToStorage("footystats-match-ratings", matchRatings);

        // Re-render just this one match's stars so they reflect the
        // new rating immediately.
        const starContainer = clickedStar.closest(".match-rating");
        starContainer.innerHTML = buildStarButtons(matchId, chosenRating);
    });
}


/* ---------------------------------------------------------------------
   3d. PLAYER SEARCH + STATS TABLE
   WHAT: Renders every player as a table row, then filters those rows
         live as the visitor types into the search box.
   --------------------------------------------------------------------- */
function buildPlayerRowHtml(player) {
    const isFavourite = favouritePlayerIds.includes(player.id);

    return `
        <tr data-player-name="${player.name.toLowerCase()}">
            <td>${player.name}</td>
            <td>${capitalise(player.position)}</td>
            <td>${player.team}</td>
            <td>${player.appearances}</td>
            <td>${player.goals}</td>
            <td>${player.assists}</td>
            <td>
                <button
                    type="button"
                    class="favourite-btn ${isFavourite ? "is-favourite" : ""}"
                    data-player-id="${player.id}"
                    aria-label="${isFavourite ? "Remove" : "Add"} ${player.name} as a favourite player"
                >${isFavourite ? "❤" : "🤍"}</button>
            </td>
        </tr>
    `;
}

function capitalise(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function renderPlayerTable() {
    const tableBody = document.getElementById("player-table-body");
    tableBody.innerHTML = players.map(buildPlayerRowHtml).join("");
}

function setupPlayerSearch() {
    const searchInput = document.getElementById("player-search-input");
    const emptyMessage = document.getElementById("player-search-empty");

    searchInput.addEventListener("input", () => {
        // Reading straight from the input's .value, lower-cased so the
        // search isn't case-sensitive ("marcus" also finds "Marcus").
        const searchTerm = searchInput.value.trim().toLowerCase();
        const allRows = document.querySelectorAll("#player-table-body tr");
        let visibleRowCount = 0;

        allRows.forEach((row) => {
            const playerName = row.dataset.playerName || "";
            const matchesSearch = playerName.includes(searchTerm);
            row.hidden = !matchesSearch;
            if (matchesSearch) {
                visibleRowCount++;
            }
        });

        // Show a friendly "no results" message only when every row is hidden.
        emptyMessage.hidden = visibleRowCount !== 0;
    });
}


/* ---------------------------------------------------------------------
   3e. LEAGUE TABLE
   --------------------------------------------------------------------- */
function buildLeagueRowHtml(team) {
    const points = team.won * 3 + team.drawn; // 3 points for a win, 1 for a draw
    const goalDifferenceText = team.goalDifference > 0
        ? `+${team.goalDifference}`
        : team.goalDifference;

    return `
        <tr>
            <td>${team.position}</td>
            <td>${team.team}</td>
            <td>${team.played}</td>
            <td>${team.won}</td>
            <td>${team.drawn}</td>
            <td>${team.lost}</td>
            <td>${goalDifferenceText}</td>
            <td><strong>${points}</strong></td>
        </tr>
    `;
}

function renderLeagueTable() {
    const tableBody = document.getElementById("league-table-body");
    tableBody.innerHTML = leagueTable.map(buildLeagueRowHtml).join("");
}


/* ---------------------------------------------------------------------
   3f. TOP PLAYERS + FILTER CARDS + FAVOURITES
   --------------------------------------------------------------------- */
function buildPlayerCardHtml(player) {
    const isFavourite = favouritePlayerIds.includes(player.id);
    const keyStat = keyStatByPosition[player.position];

    return `
        <article class="player-card" data-position="${player.position}">
            <button
                type="button"
                class="favourite-btn ${isFavourite ? "is-favourite" : ""}"
                data-player-id="${player.id}"
                aria-label="${isFavourite ? "Remove" : "Add"} ${player.name} as a favourite player"
            >${isFavourite ? "❤" : "🤍"}</button>

            <div class="player-avatar" aria-hidden="true">${getInitials(player.name)}</div>
            <h3>${player.name}</h3>
            <span class="player-position">${capitalise(player.position)}</span>
            <p>
                <span class="player-key-stat">${keyStat.value(player)}</span><br />
                <span class="player-key-stat-label">${keyStat.label}</span>
            </p>
        </article>
    `;
}

function renderTopPlayers() {
    const grid = document.getElementById("top-players-grid");
    grid.innerHTML = players.map(buildPlayerCardHtml).join("");
}

// "Filter Cards" feature: clicking a filter button shows only the
// player cards whose data-position matches the button's data-filter
// (or shows everything again when "All" is clicked).
function setupCardFiltering() {
    const filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const chosenFilter = button.dataset.filter;

            // Move the "is-active" highlight to whichever button was clicked.
            filterButtons.forEach((otherButton) => {
                otherButton.classList.remove("is-active");
            });
            button.classList.add("is-active");

            const allCards = document.querySelectorAll("#top-players-grid .player-card");
            allCards.forEach((card) => {
                const cardMatches = chosenFilter === "all" || card.dataset.position === chosenFilter;
                card.classList.toggle("is-hidden-by-filter", !cardMatches);
            });
        });
    });
}

// "Favourite Player" feature: works for BOTH the table's heart buttons
// and the top-player cards' heart buttons, because we listen on the
// whole page and check which button was actually clicked.
function setupFavouriteToggle() {
    document.body.addEventListener("click", (event) => {
        const clickedButton = event.target.closest(".favourite-btn");
        if (!clickedButton) {
            return;
        }

        const playerId = Number(clickedButton.dataset.playerId);
        const alreadyFavourite = favouritePlayerIds.includes(playerId);

        if (alreadyFavourite) {
            // Remove this id from the array (keep every id that ISN'T this one).
            favouritePlayerIds = favouritePlayerIds.filter((id) => id !== playerId);
        } else {
            favouritePlayerIds.push(playerId);
        }

        saveToStorage("footystats-favourites", favouritePlayerIds);

        // Re-render both places a heart can appear, so they always agree
        // with each other no matter which one was clicked.
        renderPlayerTable();
        renderTopPlayers();

        // Re-render clears any active search/filter highlighting, so we
        // re-apply them immediately afterwards.
        reapplySearchAndFilter();
    });
}

// Because renderPlayerTable()/renderTopPlayers() rebuild the HTML from
// scratch, any hidden-by-search or hidden-by-filter state would
// otherwise be lost. This small helper re-runs both features'
// current state so the visible list doesn't "jump back" to showing
// everyone after a favourite is toggled.
function reapplySearchAndFilter() {
    const searchInput = document.getElementById("player-search-input");
    if (searchInput.value.trim() !== "") {
        searchInput.dispatchEvent(new Event("input"));
    }

    const activeFilterButton = document.querySelector(".filter-btn.is-active");
    if (activeFilterButton && activeFilterButton.dataset.filter !== "all") {
        activeFilterButton.click();
    }
}


/* ---------------------------------------------------------------------
   3g. CONTACT FORM VALIDATION
   WHAT: Checks the name, email and message fields look reasonable
         before pretending to "send" the message (this is a front-end
         only demo, so nothing is actually emailed anywhere).
   --------------------------------------------------------------------- */
function setupContactForm() {
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("form-feedback");

    form.addEventListener("submit", (event) => {
        // Stops the browser's default behaviour of reloading the page,
        // which is what a plain HTML form normally does on submit.
        event.preventDefault();

        const nameInput = document.getElementById("contact-name");
        const emailInput = document.getElementById("contact-email");
        const messageInput = document.getElementById("contact-message");

        // .checkValidity() uses the built-in browser rules we already
        // set in the HTML (required, minlength, type="email") to tell
        // us if a field is valid, without us re-writing those checks.
        const isNameValid = nameInput.checkValidity();
        const isEmailValid = emailInput.checkValidity();
        const isMessageValid = messageInput.checkValidity();

        toggleFieldError(nameInput, isNameValid);
        toggleFieldError(emailInput, isEmailValid);
        toggleFieldError(messageInput, isMessageValid);

        const isFormValid = isNameValid && isEmailValid && isMessageValid;

        feedback.hidden = false;
        if (isFormValid) {
            feedback.textContent = `Thanks, ${nameInput.value}! Your message has been received (this is a demo, so nothing is actually sent).`;
            feedback.classList.add("is-success");
            feedback.classList.remove("is-error");
            form.reset();
        } else {
            feedback.textContent = "Please fix the highlighted fields and try again.";
            feedback.classList.add("is-error");
            feedback.classList.remove("is-success");
        }
    });
}

function toggleFieldError(inputElement, isValid) {
    inputElement.closest(".form-group").classList.toggle("has-error", !isValid);
}


/* ---------------------------------------------------------------------
   3h. FOOTER YEAR
   Small nice-to-have: keeps the copyright year correct automatically
   instead of a developer needing to remember to update it every year.
   --------------------------------------------------------------------- */
function setupFooterYear() {
    document.getElementById("footer-year").textContent = new Date().getFullYear();
}


/* ---------------------------------------------------------------------
   4. INITIALISE EVERYTHING
   WHY: We wait for "DOMContentLoaded" to be extra safe — this event
        fires once the browser has fully parsed the HTML, guaranteeing
        every element we look for with getElementById actually exists.
        (Because our <script> tag is already at the bottom of the
        page, this mostly happens instantly — but it's a good habit.)
   --------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    setupMobileNav();
    setupFooterYear();

    renderMatches();
    setupMatchRating();

    renderPlayerTable();
    setupPlayerSearch();

    renderLeagueTable();

    renderTopPlayers();
    setupCardFiltering();
    setupFavouriteToggle();

    setupAnimatedStats();
    setupContactForm();
});
