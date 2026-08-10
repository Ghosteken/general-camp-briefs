# Kokoodi AI Makers Camp

## Week 2 — Session 3: CSS Polish, Accessibility & AI Review

**Instructor:** Kingsley Onyema
**Week:** 2
**Session:** 3 — Friday
**Core Teaching:** Visual polish, hover states, consistency, accessibility and AI-assisted CSS review
**JavaScript:** Not introduced
**Primary Deliverable:** A polished Week 2 version of each Builder's website.

---

# 1. Session Overview

Friday is about finishing rather than introducing a large amount of new content.

The students should take the CSS knowledge from Monday and Wednesday and apply it to their own projects.

The objective is:

> Make the website feel like a product rather than a collection of HTML elements.

Do not introduce JavaScript.

---

# 2. Learning Objectives

By the end of the session, students should be able to:

* Identify visual problems in their own website.
* Improve consistency.
* Create basic hover effects.
* Improve buttons and cards.
* Review spacing and typography.
* Check responsive behaviour.
* Improve accessibility.
* Use AI to critique CSS.
* Decide which AI suggestions are useful.
* Explain what they changed and why.
* Present their design decisions.

---

# 3. Opening Review

Ask students to open the website they created during Week 1.

Compare:

### Week 1

HTML structure.

### Week 2

HTML + CSS design.

Ask:

> "If someone saw your website for the first time, would they understand what it is?"

---

# 4. What Makes a Website Feel Professional?

Discuss:

* Consistent colors.
* Consistent spacing.
* Clear typography.
* Strong visual hierarchy.
* Clear navigation.
* Good buttons.
* Useful images.
* Responsive layout.
* Accessibility.

Explain that professional design is not simply about adding more effects.

---

# 5. Visual Hierarchy

Explain that not everything should have the same visual importance.

A typical hierarchy:

```text
Main heading
    ↓
Main message
    ↓
Important image/action
    ↓
Supporting information
```

Ask students:

> "What do you want visitors to notice first?"

---

# 6. Buttons

Create a basic button style:

```css
.button {
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
}
```

Explain that the button should visually communicate:

> "You can interact with me."

---

# 7. Hover States

Introduce:

```css
.button:hover {
    transform: scale(1.05);
}
```

Explain:

`:hover` activates when the pointer is over the element.

Other possible changes:

* Background color.
* Text color.
* Border.
* Shadow.
* Size.

Keep effects subtle.

---

# 8. Cards

Review their card designs.

Ask:

* Are cards the same size?
* Is spacing consistent?
* Are headings clear?
* Is the content easy to scan?
* Does the card work on mobile?

Example:

```css
.card {
    padding: 20px;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}
```

---

# 9. Consistency

Explain that a website should have a design system.

For example:

All buttons should generally look similar.

All cards should generally use:

* Similar spacing.
* Similar border radius.
* Similar typography.

Students should avoid styling every element randomly.

---

# 10. Accessibility Review

Check:

### Text contrast

Can the text be read easily?

### Images

Does every important image have useful alt text?

### Headings

Are headings used logically?

### Links

Can users tell that something is a link?

### Keyboard

Can important controls be reached using the keyboard?

---

# 11. Image Accessibility

Example:

```html
<img
    src="images/player.jpg"
    alt="Football player celebrating a goal">
```

Explain:

`alt` is not decoration.

It provides information about an image when the image cannot be seen.

---

# 12. Responsive Review

Test:

### Desktop

Is the layout balanced?

### Mobile

Does the content fit?

Check:

* Cards.
* Images.
* Navigation.
* Text.
* Buttons.
* Sections.

---

# 13. AI CSS Review

This session changes how students use AI.

Instead of asking:

> "Write my website."

They ask:

> "Review my work."

Prompt:

```text
Review this CSS as a beginner-friendly UI/UX reviewer.

Identify:
1. Repeated styles.
2. Poor spacing.
3. Readability problems.
4. Responsive design problems.
5. Accessibility concerns.

For each issue:
- Explain the problem.
- Explain why it matters.
- Suggest a simple improvement.

Do not rewrite my entire CSS.
Do not use JavaScript.
```

---

# 14. AI Decision Making

Students should not automatically accept every suggestion.

Teach:

### AI suggests.

### Developer evaluates.

### Developer tests.

### Developer decides.

This is an important part of responsible AI-assisted development.

---

# 15. AI Reflection

Each student should record:

```text
I asked AI:
...

AI suggested:
...

I accepted:
...

I rejected:
...

I rejected it because:
...
```

This prepares them for the later AI progression in the programme.

---

# 16. Friday Polish Challenge

Give students approximately 30 minutes.

They must choose **three areas** to improve.

Possible choices:

* Navigation.
* Hero section.
* Cards.
* Buttons.
* Typography.
* Spacing.
* Colors.
* Mobile layout.
* Accessibility.

They should not attempt to redesign the entire website.

---

# 17. Project-Specific Polish

## Joshua — AvatarVerse

Focus on:

* Gaming atmosphere.
* Character presentation.
* Dark visual identity.
* Accent colors.
* Cards.
* Navigation.

Ask:

> "Does this look like a game-related product?"

---

## Buyi — Footy Stats

Focus on:

* Football identity.
* Player statistics.
* Rating cards.
* Match sections.
* Clear information hierarchy.

Ask:

> "Can someone quickly understand the statistics?"

---

## John — The Long Way Home

Focus on:

* Adventure atmosphere.
* Locations.
* Character sections.
* Story.
* Navigation.

Ask:

> "Does the design make me want to explore the game?"

---

# 18. Demo Preparation

Each Builder should prepare a short presentation.

They should explain:

### 1. What is my project?

### 2. Who is it for?

### 3. What did I change this week?

### 4. Why did I choose these colors?

### 5. What CSS feature am I proud of?

### 6. What problem did I encounter?

### 7. How did I solve it?

### 8. How did I use AI?

---

# 19. Demo Rule

Do not allow students to simply say:

> "AI made this."

Instead ask:

> "What did AI do?"

and:

> "What did you do?"

The student must be able to explain their contribution.

---

# 20. Week 2 Final Checklist

## HTML

* [ ] Navigation works.
* [ ] Sections are organised.
* [ ] Images have alt text.
* [ ] Content is meaningful.

## CSS

* [ ] External stylesheet works.
* [ ] Colors are consistent.
* [ ] Typography is readable.
* [ ] Spacing is consistent.
* [ ] Cards/components are styled.
* [ ] Layout uses Flexbox and/or Grid.
* [ ] Hover effects work where appropriate.

## Responsive

* [ ] Desktop layout works.
* [ ] Mobile layout works.
* [ ] Images fit.
* [ ] Text does not overflow.
* [ ] Cards adapt to screen size.

## Accessibility

* [ ] Good contrast.
* [ ] Useful alt text.
* [ ] Logical headings.
* [ ] Clear links/buttons.

## AI

* [ ] AI use was declared.
* [ ] Students understand AI-generated CSS.
* [ ] AI suggestions were tested.
* [ ] Students made their own decisions.

---

# 21. Demo Time

Each Builder gets approximately 2–3 minutes.

Suggested structure:

> "My project is called..."

> "It is designed for..."

> "This week I changed..."

> "I chose these colors because..."

> "My favourite CSS feature is..."

> "One problem I had was..."

> "I solved it by..."

> "I used AI to..."

> "I decided to accept/reject the suggestion because..."

---

# 22. Peer Feedback

After each demo, ask the other students for:

### One thing they liked

and

### One improvement they would suggest.

Teach them to critique the **work**, not the person.

Good:

> "The navigation is clear."

Better:

> "I think the cards could have more spacing."

Avoid:

> "Your website is bad."

---

# 23. Week 2 Reflection

Ask:

> "What can your website do visually now that it could not do last week?"

Then:

> "What CSS concept do you understand best?"

Then:

> "What do you still find confusing?"

Record common problems for Week 3 preparation.

---

# 24. Week 2 Achievement

By the end of this session, students should have transformed:

```text
HTML structure
```

into:

```text
HTML
+
CSS
+
Responsive Design
+
Accessibility
+
Personal Design
```

Their websites should now look like the beginnings of real products.

---

# 25. Preview of Week 3

Tell the students:

> "Your website looks good. Next week we're going to make it react to you."

Introduce the idea of:

**JavaScript**

without teaching it yet.

Examples:

* Click a button.
* Change text.
* Calculate a score.
* Show information.
* Respond to user actions.

Tell them:

> "Next week, we make the website think and respond."

---

# 26. Instructor End-of-Week Checklist

* [ ] Each Builder has a styled project.
* [ ] Each project is responsive.
* [ ] Students understand basic CSS.
* [ ] Students can explain their CSS.
* [ ] Accessibility has been introduced.
* [ ] Students used AI responsibly.
* [ ] Students completed a Week 2 demo.
* [ ] Students identified their remaining problems.
* [ ] Week 3 JavaScript starting points are clear.

---

# 27. Checkout Post

Each Builder posts:

**My project:**
...

**My biggest improvement this week:**
...

**My favourite CSS technique:**
...

**Something I struggled with:**
...

**Something I want to make interactive next week:**
...
