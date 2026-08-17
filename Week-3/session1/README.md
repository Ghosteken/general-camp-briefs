# SESSION 1 — MONDAY

## JavaScript Foundations

### Main Goal

The students should understand:

JavaScript allows a webpage to respond to what the user does.

---

## 6. Session Outcomes

By the end of the session, students should be able to:

- Explain JavaScript in simple terms.
- Create a variable.
- Use `console.log()`.
- Find an HTML element.
- Change text on a webpage.
- Respond to a button click.
- Explain the basic idea of the DOM.

---

## 7. Suggested Session Flow

### Opening — 10 minutes

Ask:

> "What can a website do?"

Let them answer.

Possible answers:

- Show information
- Play videos
- Search
- Login
- Buy things
- Calculate
- Change pages
- Display messages

Then ask:

> "How does a website know that you clicked something?"

Use this to introduce JavaScript.

---

## 8. HTML vs CSS vs JavaScript

Use this analogy:

| Layer | Role |
|---|---|
| HTML | Structure |
| CSS | Appearance |
| JavaScript | Behaviour |

Example:

- **HTML** — "What is on the page?"
- **CSS** — "What does it look like?"
- **JavaScript** — "What happens when I interact with it?"

---

## 9. First JavaScript Demonstration

Create:

```html
<button id="helloButton">Click Me</button>
<script src="script.js"></script>
```

Then:

```js
console.log("Hello World");
```

Open Developer Tools.

Show them the Console.

Explain:

The browser has tools that allow developers to inspect and debug websites.

---

## 10. Variables

Introduce:

```js
let studentName = "Joshua";
let age = 14;
```

Explain:

A variable is a named place where we can store information.

Use practical examples:

```js
let playerName = "Salah";
let score = 90;
let team = "Liverpool";
```

Ask:

> "If we were building Buyi's football website, what information could we store in variables?"

---

## 11. DOM Introduction

Use:

```html
<h1 id="title">Welcome</h1>
```

JavaScript:

```js
const title = document.getElementById("title");
title.textContent = "Welcome to My Website";
```

Explain:

```
document
   ↓
find element
   ↓
change element
```

Do not go deeply into DOM theory.

The important idea is:

JavaScript can find HTML elements and change them.

---

## 12. Events

Introduce the concept:

An event is something that happens.

Examples:

- Click
- Typing
- Mouse movement
- Form submission

Start with click events.

```js
const button = document.getElementById("helloButton");

button.addEventListener("click", function () {
  console.log("Button clicked!");
});
```

Then make the example visible:

```js
button.addEventListener("click", function () {
  document.getElementById("title").textContent =
    "You clicked the button!";
});
```

---

## 13. Class Project

### Interactive Profile Card

The project should contain:

- Profile image
- Name
- Role
- Description
- Skills
- Button

The button changes something on the page.

**Example:**

Before:

```
Hi, I am Alex.
I am learning coding.
[Learn More]
```

After clicking:

```
Hi, I am Alex.
I build websites using HTML, CSS and JavaScript.
[Hide Information]
```

---

## 14. Teaching Strategy

Do not give them the complete solution immediately.

Build it gradually.

1. **Step 1** — Create the HTML.
2. **Step 2** — Style it.
3. **Step 3** — Create the JavaScript file.
4. **Step 4** — Select the button.
5. **Step 5** — Listen for the click.
6. **Step 6** — Change the text.
7. **Step 7** — Let them modify it.

---

## 15. Break-It Activity

Ask them to deliberately change:

```js
document.getElementById("description")
```

to:

```js
document.getElementById("wrong")
```

Run the program.

Ask:

> "What happened?"

Then use the browser console to investigate.

This introduces debugging naturally.

---

## 16. Individual Project Connection

Spend individual time connecting JavaScript to their personal projects.

### Joshua — Avatar/Game Concept

Possible beginner JavaScript features:

- Change avatar name.
- Change avatar description.
- Select an avatar.
- Show/hide character information.

### Buyi — Footy Stats

Possible features:

- Click a player.
- Display player statistics.
- Change selected player.
- Show player information.

### John — Pathfinding Game Concept

Do not attempt the full multiplayer/pathfinding system yet.

Start with:

- Select a character.
- Display destination.
- Change movement instructions.
- Show a simple score.

The goal is to teach JavaScript, not build the entire final product.

---

## 17. Session 1 Assessment

Ask each Builder:

1. **Question 1** — What is JavaScript?
2. **Question 2** — What is a variable?
3. **Question 3** — What is an event?
4. **Question 4** — What does `getElementById()` do?
5. **Question 5** — What happens when the button is clicked?

If they can explain the project in their own words, the session has succeeded.

---

## 18. Session 1 Homework

### Interactive About Me Page

Requirements:

- Name
- Image
- Description
- Three skills
- Button
- JavaScript interaction

The button must change something on the page.