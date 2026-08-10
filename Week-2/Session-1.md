# Week 2 – Session 1: Think Like a Designer

**Programme:** Kokoodi AI Makers Camp
**Week:** 2
**Session:** 4
**Date:** Monday, 10 August 2026
**Instructor:** Kingsley Onyema
**Guest:** Leye, Design Lead
**Theme:** Think Like a Designer
**Week 2 Deliverable:** Working quiz app with one AI-powered feature

---

# 1. Session Overview

Week 2 begins the transition from building static HTML structures to thinking about how real users interact with software.

The focus of this session is not to introduce a large amount of new code.

Instead, Builders will learn to evaluate their existing Week 1 websites from a user's perspective and improve them.

The key idea is:

> A website can work technically and still provide a poor user experience.

Builders will learn basic UI/UX concepts, accessibility principles, visual hierarchy, colour contrast, readable typography, navigation and user-focused design.

They will then critique each other's Week 1 websites and use the feedback to make improvements.

This session also marks an important change in the programme's AI progression.

From today, Builders may ask AI to generate code. However, they must understand and explain anything they use.

---

# 2. Session Objectives

By the end of the session, each Builder should be able to:

- Explain the difference between UI and UX.
- Identify the intended user of their project.
- Explain why user needs should influence design decisions.
- Identify basic usability problems in a website.
- Explain visual hierarchy.
- Understand why colour contrast matters.
- Explain basic accessibility principles.
- Use meaningful `alt` text for images.
- Understand the importance of heading structure.
- Consider keyboard users.
- Consider mobile users.
- Give constructive feedback on another person's project.
- Apply feedback to their own website.
- Use AI to assist with coding while maintaining ownership of the code.

---

# 3. Core Teaching Principle

Do not turn this into a long design lecture.

The Builders should spend most of the session looking at websites, discussing what they see, identifying problems and improving their own projects.

The guiding question throughout the session is:

> "If I were the person using this website, what would make my experience better?"

---

# 4. Materials and Setup

Prepare:

- Builders' Week 1 websites
- GitHub repositories
- VS Code for Web
- Browser
- Teams
- Screen sharing
- Slide deck
- Website critique checklist
- A few example websites
- Leye's design session

Before the session:

- Confirm all three Builders can access their repositories.
- Confirm their Week 1 websites are available.
- Confirm Leye knows the approximate duration of the guest session.
- Prepare the critique activity.
- Have the students' three project ideas available:
  - Joshua – AvatarVerse
  - Buyi – Footy Stats
  - John – The Long Way Home

---

# 5. Session Structure

## 10:00 – Stand-up

Duration: 10 minutes

Each Builder answers:

1. What did I complete?
2. What am I working on next?
3. What is blocking me?

Keep this short.

The purpose is to establish the working rhythm rather than turn the stand-up into a teaching session.

---

# 6. Opening Discussion

Ask:

> "Last week, we were mostly asking: Does my website work?"

Then introduce today's question:

> "Today we are asking: Is my website good for the person using it?"

Explain that professional developers do not only write code.

They think about:

- Users
- Problems
- Goals
- Accessibility
- Ease of use
- Visual communication

---

# 7. UI – User Interface

Explain:

UI means User Interface.

It is the part of a product that people interact with.

Examples:

- Buttons
- Navigation
- Text
- Images
- Forms
- Cards
- Menus

Ask:

> "What are some interfaces you use every day?"

Possible answers:

- Phone
- Game controller
- YouTube
- WhatsApp
- Websites
- ATM

Use familiar examples rather than giving a long definition.

---

# 8. UX – User Experience

Explain:

UX means User Experience.

It describes how the user experiences the product while using it.

A website may look beautiful but still have poor UX.

For example:

A football statistics website may have excellent colours and images, but if users cannot find the player statistics, the experience is poor.

Ask:

> "What would make a website frustrating to use?"

Possible answers:

- Confusing navigation
- Tiny text
- Slow interactions
- Missing information
- Hard-to-find buttons
- Poor colour choices

---

# 9. UI vs UX

Use the following simple distinction:

**UI**

How the product looks and what the user interacts with.

**UX**

How easy, clear and useful the product is to use.

Do not insist that students memorise the definitions.

The important thing is that they understand the difference.

---

# 10. Identify the User

Bring the discussion back to their projects.

## Joshua – AvatarVerse

Primary user:

Someone interested in games and character-based adventures.

Ask:

- What would this person want to see first?
- What would make them interested?
- What information would they need?

---

## Buyi – Footy Stats

Primary user:

Someone interested in football matches and statistics.

Ask:

- What information would they want immediately?
- Would they care more about colours or statistics?
- How quickly can they find a player?

---

## John – The Long Way Home

Primary user:

Someone interested in adventure games and strategic movement.

Ask:

- What would make them curious?
- How should the game objective be explained?
- How can the pathfinding idea be communicated simply?

---

# 11. The Five-Second Test

Explain the idea:

Imagine a new visitor opens the homepage.

They only have a few seconds to understand the website.

They should be able to answer:

1. What is this?
2. Who is it for?
3. What can I do here?

Ask each Builder to look at their own homepage.

Then ask:

> "Can someone understand your project without you explaining it?"

---

# 12. Visual Hierarchy

Introduce the idea that not every element on a page should have equal importance.

A good design guides the user's attention.

Typical hierarchy:

1. Main heading
2. Important message
3. Main action
4. Supporting information

Use their own websites as examples.

Ask:

> "What do you want your visitor to notice first?"

---

# 13. Colour

Explain that colour should have a purpose.

Colour can:

- Create identity
- Separate sections
- Highlight important information
- Show actions
- Create a particular mood

Connect this directly to their projects.

### Joshua

A futuristic gaming theme.

### Buyi

A football/sports theme.

### John

An adventure/game theme.

Do not spend too much time discussing colour theory.

The goal is to make purposeful design decisions.

---

# 14. Colour Contrast

Explain that text must be readable against its background.

Poor example:

Dark grey text on a black background.

Better example:

Light text on a dark background.

Ask:

> "If someone cannot easily read the text, does the design work?"

Introduce contrast as an accessibility and usability issue rather than simply a visual preference.

---

# 15. Typography

Explain that fonts influence readability and personality.

Discuss:

- Font size
- Font weight
- Line spacing
- Heading size
- Consistency

Key principle:

> Readability comes first.

Avoid allowing students to use many different fonts simply because they look interesting.

---

# 16. Images

Ask:

> "Why is this image on your website?"

Good images should:

- Communicate something
- Support the content
- Help users understand the project
- Create visual interest

Explain that an image should have a reason for being there.

---

# 17. Accessibility

Introduce accessibility as:

> Designing websites that can be used by as many people as possible.

Discuss:

- Users with visual difficulties
- Keyboard users
- Users on mobile devices
- Users who need clear navigation
- Users who need readable content

Make it clear that accessibility is part of good engineering.

---

# 18. Accessibility in Their HTML

Review things they already know.

## Images

```html
<img src="player.jpg" alt="Football player celebrating a goal">
```
