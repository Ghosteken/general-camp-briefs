
# Session 3 – Completing Our First Website

**Week 1 | Kokoodi AI Makers Camp**

**Date:** Friday 7 August 2026

**Instructor:** Kingsley Onyema

**Theme:** Completing Our First Website with Semantic HTML, Navigation and GitHub Pages

**Duration:** Approximately 3 hours (excluding breaks)

---

# Session Overview

This is the final HTML session before students begin learning CSS.

Today's goal is to transform each Builder's homepage into a professional multi-section website using semantic HTML elements.

Students will also learn how navigation works using anchor links, understand Git commits, and publish their websites live using GitHub Pages.

By the end of today's lesson, every Builder should have a live website that they can proudly share with family and friends.

---

# Learning Objectives

By the end of today's lesson, students will be able to:

- Explain semantic HTML.
- Build a professional webpage structure.
- Use semantic HTML elements correctly.
- Create a navigation bar.
- Link navigation items to page sections.
- Understand HTML IDs.
- Use internal anchor links.
- Make meaningful Git commits.
- Publish a website using GitHub Pages.
- Present their project confidently.

---

# Materials

- VS Code for Web
- GitHub
- GitHub Pages
- Browser
- Teams
- Internet Connection

---

# Student Projects

## Joshua

Project:
**AvatarVerse**

Today's Goal

- Add navigation
- Add multiple sections
- Add character section
- Add contact section

---

## Buyi

Project:
**Footy Stats**

Today's Goal

- Add navigation
- Add player statistics section
- Add latest matches section
- Add contact section

---

## John

Project:
**The Long Way Home**

Today's Goal

- Add navigation
- Add gameplay section
- Add AI section
- Add contact section

---

# Session Schedule

## Stand-up (10 Minutes)

Each Builder answers:

- What did I complete?
- What am I building today?
- What is blocking me?

---

# Part 1 – Recap (10 Minutes)

Review Session 2.

Students should remember:

- Headings
- Paragraphs
- Lists
- Images
- Links
- GitHub

Explain:

Today we are going to make our websites feel like professional websites.

---

# Part 2 – What Makes a Good Website? (10 Minutes)

Ask students:

Think about websites you visit every day.

Examples:

- YouTube
- BBC
- Nike
- Google

Questions

- What do they all have?
- How do you move around them?
- Why don't you get lost?

Expected Answers

- Navigation
- Sections
- Logo
- Footer
- Images

---

# Part 3 – Semantic HTML (20 Minutes)

Explain that HTML gives us meaningful tags.

Instead of putting everything inside `<div>` elements, we can use tags that describe the purpose of the content.

Introduce:

```html
<header>
<nav>
<section>
<aside>
<footer>
```

Explain each one.

### header

Contains:

- Website title
- Logo
- Navigation

---

### nav

Contains links that help users move around the page.

---

### section

Groups related information together.

Examples

- About
- Features
- Gallery
- Contact

---

### aside

Contains extra information.

Examples

- Tips
- Statistics
- News
- Fun Facts

---

### footer

Contains

- Copyright
- Contact information
- Social media links

---

# Part 4 – IDs and Navigation (20 Minutes)

Explain that each section needs its own ID.

Example

```html
<section id="about">

<h2>About</h2>

</section>
```

Navigation links use these IDs.

Example

```html
<a href="#about">About</a>
```

When clicked,

the browser scrolls directly to that section.

Explain that almost every modern website uses this technique.

---

# Live Coding Activity (30 Minutes)

Build together.

Create

```html
<header>

<nav>

<a href="#home">Home</a>

<a href="#about">About</a>

<a href="#features">Features</a>

<a href="#contact">Contact</a>

</nav>

</header>
```

Then build

```html
<section id="home">

</section>

<section id="about">

</section>

<section id="features">

</section>

<section id="contact">

</section>
```

Demonstrate clicking each navigation item.

Show the page scrolling.

---

# Builder Activity

Students now improve their own websites.

---

## Joshua

Add:

- Home
- About
- Characters
- Features
- Contact

---

## Buyi

Add:

- Home
- About
- Match Statistics
- Top Players
- Contact

---

## John

Add:

- Home
- Story
- Gameplay
- AI Pathfinding
- Contact

---

# Mini Challenge

Every website should contain:

- Header
- Navigation
- Five Sections
- Footer

Bonus

Add a "Back to Top" link.

---

# One-to-One Sessions

Check each Builder's website.

Ask questions like:

- Why did you use this section?
- Why does this navigation work?
- What does the ID do?
- Explain every line you wrote.

Encourage students to solve problems themselves.

Guide them with questions rather than writing code.

---

# Afternoon Build Session

Students continue improving their websites independently.

Possible improvements:

- More images
- Better headings
- Extra sections
- Better text
- Better navigation

Provide individual support where needed.

---

# Git and GitHub

Explain Git using a simple analogy.

Git is like saving different versions of a game.

If something breaks,

you can return to an earlier version.

Every commit is a checkpoint.

---

# Good Commit Messages

Examples

```
Added navigation menu

Created About section

Added Contact page

Improved homepage layout
```

Avoid messages like

```
Update

Changes

Done

Fix
```

Explain that commit messages should describe what changed.

---

# Publishing with GitHub Pages

Guide students through:

1. Open Repository
2. Click Settings
3. Click Pages
4. Select Branch
5. Save

Wait a few moments.

Visit the live website.

Celebrate when it appears online.

Explain that they are now real web developers because their work is accessible on the internet.

---

# AI Reflection

Students may ask AI:

- Explain semantic HTML.
- What does the `<nav>` tag do?
- Why do websites use IDs?

Students may **not** ask AI to build the webpage for them.

Remind students:

AI should help you learn,

not replace your thinking.

---

# Demo Time

Each Builder presents:

- Their homepage
- Their navigation
- Their favourite section
- One thing they learned
- One thing they found difficult

Encourage positive feedback from other Builders.

---

# Homework

Share your website with:

- A parent
- A sibling
- A friend

Ask them:

- What do you like?
- What should I improve?
- Was the website easy to use?

Write down their feedback.

---

# Assessment Checklist

By the end of Session 3, each Builder should have:

✅ Navigation bar

✅ Semantic HTML structure

✅ Multiple webpage sections

✅ Working anchor navigation

✅ Footer

✅ Git commits

✅ Live GitHub Pages website

✅ Confidence explaining their code

---

# Instructor Notes

This is the final HTML lesson.

Do not rush into CSS.

Focus on helping students understand website structure rather than styling.

Celebrate every successful GitHub Pages deployment.

Encourage creativity while reinforcing good HTML practices.

Keep reminding students to explain every line of code they write.

---

# Deliverable

At the end of Session 3, every Builder should have:

- A professional multi-section HTML website
- Working navigation using anchor links
- A published GitHub Pages website
- A GitHub repository with meaningful commits
- A strong HTML foundation ready for CSS in Week 2
