# Kokoodi AI Makers Camp

## Week 2 — Session 2: CSS Layout & Responsive Design

**Instructor:** Kingsley Onyema
**Week:** 2
**Session:** 2 — Wednesday
**Core Teaching:** Flexbox, Grid, cards, layout and responsive design
**JavaScript:** Not introduced
**Primary Deliverable:** Students create a more professional, responsive layout for their projects.

---

# 1. Session Overview

The students now understand basic CSS.

Today they move from styling individual elements to controlling how groups of elements are arranged.

The central question is:

> "How do we arrange our website so that it looks good on different screen sizes?"

Introduce:

* Flexbox
* Grid
* Alignment
* Gap
* Cards
* Responsive design
* Media queries

---

# 2. Learning Objectives

By the end of this session, students should be able to:

* Explain what layout means.
* Use Flexbox for simple layouts.
* Understand `display: flex`.
* Use `justify-content`.
* Use `align-items`.
* Use `gap`.
* Understand basic CSS Grid.
* Create card layouts.
* Understand responsive design.
* Use a simple media query.
* Test their website on smaller screens.
* Ask AI for help with CSS layout.
* Explain AI-generated CSS before keeping it.

---

# 3. Session Opening

Show a modern website.

Ask:

> "Why doesn't everything appear in one long line?"

Explain that professional interfaces use layout systems.

Compare:

```text
Element
Element
Element
Element
```

with:

```text
Element   Element   Element
```

---

# 4. Flexbox

Introduce:

```css
.container {
    display: flex;
}
```

Explain that Flexbox helps arrange elements.

Example:

```html
<div class="menu">
    <a href="#">Home</a>
    <a href="#">Stats</a>
    <a href="#">Players</a>
</div>
```

```css
.menu {
    display: flex;
    gap: 20px;
}
```

---

# 5. Flex Direction

Demonstrate:

```css
flex-direction: row;
```

and:

```css
flex-direction: column;
```

Explain the difference visually.

---

# 6. Justify Content

Introduce:

```css
justify-content: flex-start;
justify-content: center;
justify-content: flex-end;
justify-content: space-between;
```

Use simple visual demonstrations.

Example:

```css
.nav {
    display: flex;
    justify-content: space-between;
}
```

---

# 7. Align Items

Introduce:

```css
align-items: center;
```

Explain that alignment controls how items are positioned across the other axis.

Do not overload students with Flexbox theory.

The goal is practical understanding.

---

# 8. Gap

Teach:

```css
gap: 20px;
```

Explain that `gap` creates space between Flexbox or Grid items.

This is often easier for beginners to understand than trying to manage every margin individually.

---

# 9. Build a Card

Create:

```html
<div class="card">
    <h3>Player Name</h3>
    <p>Goals: 4</p>
    <p>Rating: 8.5</p>
</div>
```

Then:

```css
.card {
    padding: 20px;
    border-radius: 12px;
}
```

Explain that cards help organise information.

---

# 10. Project Card Ideas

## Joshua

Character cards:

```text
Character
Name
Level
Ability
```

## Buyi

Player cards:

```text
Player
Goals
Assists
Rating
```

## John

Location cards:

```text
Location
Difficulty
Path
Description
```

---

# 11. CSS Grid

Introduce:

```css
.cards {
    display: grid;
}
```

Then:

```css
grid-template-columns: repeat(3, 1fr);
```

Explain:

> "We are asking the browser to create three columns."

---

# 12. Grid Example

```css
.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
```

Result:

```text
[ Card ] [ Card ] [ Card ]

[ Card ] [ Card ] [ Card ]
```

---

# 13. Flexbox vs Grid

Keep it simple.

### Flexbox

Good for:

* Navigation
* Rows
* Simple alignment
* One-dimensional layouts

### Grid

Good for:

* Cards
* Galleries
* Dashboards
* Rows and columns

Students do not need to memorise complicated rules.

---

# 14. Responsive Design

Explain:

> "Responsive design means our website adapts to different screen sizes."

Our website should work on:

* Desktop
* Laptop
* Tablet
* Phone

---

# 15. Why Mobile Matters

Ask students:

> "What happens if someone opens your website on a phone?"

Test their current website.

Look for:

* Text overflowing.
* Cards becoming too narrow.
* Images becoming too large.
* Navigation becoming crowded.

---

# 16. Media Queries

Introduce a basic media query:

```css
@media (max-width: 768px) {
    .cards {
        grid-template-columns: 1fr;
    }
}
```

Explain:

> "When the screen becomes smaller, the cards become one column."

---

# 17. Build Together

All students create:

### Desktop

```text
[ Card ] [ Card ] [ Card ]
```

### Mobile

```text
[ Card ]

[ Card ]

[ Card ]
```

Let them resize the browser and watch the layout change.

---

# 18. Project Application

### Joshua

Create a responsive character/game section.

### Buyi

Create a responsive football statistics section.

### John

Create a responsive locations/adventure section.

---

# 19. AI Exercise

Students ask AI:

```text
I have three cards in a CSS grid.

I want:
- three columns on desktop
- one column on mobile
- 20px spacing between cards

Explain the CSS I should use.

Do not use JavaScript.
Explain every important property.
```

After receiving the response, students must explain:

* `grid`
* `grid-template-columns`
* `gap`
* `@media`

---

# 20. AI Verification

Ask:

> "Did the AI answer actually solve the problem?"

Students test the code.

Explain:

AI can produce code that:

* Does not work.
* Uses unnecessary code.
* Does not match the existing project.
* Creates unexpected behaviour.

Testing is part of programming.

---

# 21. Individual Time

Use the one-to-one slots to solve actual project problems.

### Joshua

Focus on:

* Hero section
* Character cards
* Game sections
* Responsive layout

### Buyi

Focus on:

* Match cards
* Player statistics
* Rating cards
* Responsive dashboard

### John

Focus on:

* Adventure sections
* Location cards
* Character information
* Responsive layout

---

# 22. Core Requirement

Each student should finish with:

* At least one Flexbox layout.
* At least one Grid layout.
* At least one card/component.
* Responsive behaviour.
* A working mobile layout.

---

# 23. Stretch Tasks

Students who finish early can:

* Add hover effects.
* Improve card shadows.
* Experiment with transitions.
* Create a responsive navigation layout.
* Create a more complex Grid.

Do not require advanced Flexbox or Grid.

---

# 24. Homework

Students should test their website on a phone or narrow browser.

Write:

**Something that looks good:**
...

**Something that breaks:**
...

**Something I want to improve:**
...

---

# 25. Instructor Checklist

* [ ] Students understand Flexbox.
* [ ] Students understand `gap`.
* [ ] Students understand basic Grid.
* [ ] Students created cards.
* [ ] Students understand responsive design.
* [ ] Students created a media query.
* [ ] Websites work on small screens.
* [ ] AI was used for CSS assistance.
* [ ] Students tested AI-generated code.
* [ ] Students can explain their code.

---

# 26. Checkout Question

Each Builder posts:

**Today I built:**
...

**The layout technique I learned:**
...

**My website works better on mobile because:**
...

**Something I still need help with:**
...
