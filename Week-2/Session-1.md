# Kokoodi AI Makers Camp

## Week 2 — Session 1: CSS Foundations & Design

**Instructor:** Kingsley Onyema
**Week:** 2
**Session:** 1 — Monday
**Duration:** 10:00–15:15 programme window
**Core Teaching:** CSS fundamentals, visual design, accessibility and AI-assisted CSS
**JavaScript:** Not introduced
**Primary Deliverable:** Each Builder significantly improves the visual design of their existing HTML project.

---

# 1. Session Overview

The students already have the HTML structure for their personal projects from Week 1.

This session moves from:

**HTML = structure**

to:

**CSS = presentation and visual design**

The objective is not to teach every CSS property. The objective is for the students to understand enough CSS to confidently modify their own websites.

The students should spend more time building than listening.

### Teaching principle

> Show → explain → build together → modify → experiment → explain back.

Avoid long lectures.

---

# 2. Learning Objectives

By the end of the session, each Builder should be able to:

* Explain what CSS is.
* Explain the relationship between HTML and CSS.
* Create and link an external CSS file.
* Understand CSS selectors.
* Change text and background colors.
* Change font size and weight.
* Control spacing using margin and padding.
* Understand the basic CSS box model.
* Apply CSS classes to project elements.
* Make basic accessibility improvements.
* Use AI to explain or draft simple CSS.
* Explain the CSS they added to their project.

---

# 3. Connection to Their Projects

Do not use a generic example for the entire lesson.

Teach the concept using their actual projects whenever possible.

### Joshua — Avatar/Game Project

Possible CSS focus:

* Dark gaming interface
* Character section
* Game cards
* Futuristic typography
* Accent colors
* Navigation styling

### Buyi — Footy Stats

Possible CSS focus:

* Football statistics cards
* Player information
* Match sections
* Ratings
* Dark sports dashboard

### John — 2D Adventure/Game Concept

Possible CSS focus:

* Adventure-style interface
* Character section
* Locations
* Game concept
* Navigation and content cards

The project should remain theirs.

---

# 4. Session Opening

Start by showing their Week 1 websites.

Ask:

> "What do you think is missing?"

Let them identify things such as:

* Colors
* Better fonts
* Spacing
* Layout
* Visual identity
* Better navigation

Then explain:

> "Last week we taught the browser what our website contains. This week we're going to tell the browser how we want it to look."

---

# 5. Explain CSS

## Definition

CSS stands for:

**Cascading Style Sheets**

CSS controls the visual appearance of HTML elements.

HTML:

```html
<h1>Footy Stats</h1>
```

CSS:

```css
h1 {
    color: green;
}
```

Explain:

HTML says:

> This is a heading.

CSS says:

> Make this heading green.

---

# 6. CSS Syntax

Teach the basic pattern:

```css
selector {
    property: value;
}
```

Example:

```css
h1 {
    color: white;
}
```

Explain each part.

### Selector

```css
h1
```

The element we want to style.

### Property

```css
color
```

The thing we want to change.

### Value

```css
white
```

The value we want to use.

---

# 7. Connecting CSS to HTML

Demonstrate an external stylesheet.

HTML:

```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

CSS:

```css
body {
    background-color: black;
    color: white;
}
```

Save and refresh the page.

Ask:

> "What changed?"

---

# 8. Selectors

Introduce three basic selectors.

## Element selector

```css
p {
    color: white;
}
```

## Class selector

```css
.card {
    padding: 20px;
}
```

HTML:

```html
<div class="card">
```

## ID selector

```css
#hero {
    background-color: black;
}
```

Do not go deeply into specificity today.

The students are beginners.

---

# 9. Colors

Demonstrate:

```css
color: white;
background-color: black;
```

Then introduce hexadecimal colors:

```css
color: #00ff88;
```

Explain that hexadecimal values allow more precise color selection.

---

# 10. Project Color Identity

Ask each Builder to choose a visual identity.

### Joshua

Possible direction:

* Black
* Purple
* Cyan
* White

### Buyi

Possible direction:

* Black
* Green
* White
* Gold

### John

Possible direction:

* Dark blue
* Blue
* Orange
* White

Do not force these colors.

They are starting points.

Ask:

> "Why did you choose these colors?"

---

# 11. Typography

Introduce:

```css
font-family
font-size
font-weight
line-height
```

Example:

```css
h1 {
    font-size: 48px;
    font-weight: bold;
}

p {
    line-height: 1.6;
}
```

Explain that typography affects readability and personality.

---

# 12. Spacing

Introduce:

### Margin

Space outside an element.

### Padding

Space inside an element.

Example:

```css
.card {
    padding: 20px;
    margin: 20px;
}
```

Use a visual explanation if possible.

---

# 13. Box Model

Show the basic structure:

```text
Margin
  ↓
Border
  ↓
Padding
  ↓
Content
```

Explain that HTML elements behave like boxes.

Do not spend too much time on advanced box-sizing concepts.

---

# 14. Guided Build

Each student should now modify their own project.

Minimum requirements:

* Body background
* Text color
* Heading styling
* Paragraph styling
* Navigation styling
* Section spacing
* At least one styled card/component

---

# 15. Accessibility

Introduce accessibility as part of good design.

Ask:

> "What if someone cannot see colors very well?"

Discuss:

* Color contrast
* Alt text
* Heading structure
* Readable font sizes
* Clear navigation

Example:

```html
<img src="player.jpg" alt="Football player">
```

Explain that `alt` describes the image.

---

# 16. AI Exercise

Week 2 changes the AI progression.

Students may now ask AI to draft CSS.

Example:

```text
Create simple CSS for a dark football statistics website.

I need:
- a dark background
- white text
- green accent colors
- cards for player statistics
- beginner-friendly CSS

Explain the important parts of the CSS.
Do not use JavaScript.
```

Students must:

1. Read the response.
2. Add the CSS.
3. Test it.
4. Ask questions about unfamiliar code.
5. Change at least one thing themselves.
6. Explain the change.

---

# 17. Important AI Rule

Do not allow:

> "AI, build my whole website."

Instead teach:

> "AI, help me understand this problem."

and:

> "AI, give me a starting point."

The Builder remains responsible for the code.

---

# 18. Individual Time

During the one-to-one sessions, focus on each student's project.

### Joshua

Help him improve the gaming interface.

### Buyi

Help him structure football statistics visually.

### John

Help him create the visual identity for the adventure/game concept.

Ask each student:

1. What are you trying to build?
2. What are you stuck on?
3. What did you try?
4. What did you learn?
5. Can you explain the CSS you added?

---

# 19. Core Requirement

Every Builder should finish with:

* External CSS connected.
* Visible design changes.
* Personal color palette.
* Improved typography.
* Improved spacing.
* At least one styled component.
* Basic accessibility improvements.

---

# 20. Stretch Tasks

For students who finish early:

* Add borders.
* Add rounded corners.
* Add shadows.
* Style navigation links.
* Create a reusable `.card` class.
* Experiment with hover effects.

Do not make stretch tasks compulsory.

---

# 21. End-of-Day Review

Ask each Builder:

> What did CSS allow you to do that HTML alone could not?

Then:

> Show me one CSS rule you understand.

Finally:

> Show me one thing you changed without AI.

---

# 22. Homework

Choose:

* A color palette.
* A heading font.
* A body font.

Write one sentence explaining why the choices fit the project.

---

# 23. Instructor Checklist

Before ending:

* [ ] All students understand CSS basics.
* [ ] All students have an external stylesheet.
* [ ] All projects have visible CSS changes.
* [ ] Students understand selectors.
* [ ] Students understand margin and padding.
* [ ] Accessibility was introduced.
* [ ] AI was used responsibly.
* [ ] Students can explain their changes.
* [ ] Each student posts their progress during checkout.

---

# 24. Checkout Question

Each Builder posts:

**Today I changed:**
...

**The CSS concept I learned:**
...

**Something I found difficult:**
...

**Tomorrow/next session I want to improve:**
...
