# SESSION 2 — WEDNESDAY

## Conditions, Arrays, Loops and DOM

### Main Goal

Move from:

> "JavaScript changes one thing."

to:

> "JavaScript can work with collections of information."

---

## 19. Opening Recap

Ask:

> "What did we make on Monday?"

Then ask:

> "What if our website has 100 pieces of information?"

For example:

- 1 task
- 10 tasks
- 100 tasks

This introduces arrays.

---

## 20. Conditions

Start with real life.

```
IF it is raining
    Take an umbrella.
```

```
IF your score is 50 or higher
    You passed.
```

```
IF the password is correct
    Allow login.
```

Then:

```js
if (score >= 50) {
  console.log("You passed!");
}
```

Explain:

```
if
 =
make a decision
```

---

## 21. Arrays

Example:

```js
const skills = [
  "HTML",
  "CSS",
  "JavaScript"
];
```

Explain that one variable can hold multiple related values.

Then:

```js
console.log(skills[0]);
```

Ask:

> "Why do you think we use 0 for the first item?"

This is an opportunity to introduce zero-based indexing.

---

## 22. Loops

Start with a practical problem.

> "What if we have 100 students?"

Writing:

```js
console.log(student1);
console.log(student2);
console.log(student3);
```

would be inefficient.

Introduce:

```js
for (let skill of skills) {
  console.log(skill);
}
```

Explain:

A loop allows us to repeat an action for multiple items.

Do not spend too much time on complicated loop syntax.

---

## 23. Class Project

### Student Task Manager

The application should allow users to:

- See tasks.
- Add tasks.
- Complete tasks.
- Delete tasks.

---

## 24. Build in Stages

### Stage 1 — HTML

Create:

- Task Manager
- Input
- Add Button
- Task List

### Stage 2 — CSS

Make it visually appealing.

### Stage 3 — JavaScript

Create:

```js
const tasks = [];
```

### Stage 4

Read the input.

### Stage 5

Add the task to the array.

### Stage 6

Display the task.

### Stage 7

Add completion.

### Stage 8

Add deletion.

---

## 25. Important Teaching Point

Do not rush into advanced code.

If students struggle with:

```js
const tasks = [];
```

stop.

Explain:

> "This is an empty box where our tasks will live."

Then add:

```js
tasks.push("Complete homework");
```

Show the result.

---

## 26. Student Project Application

### Joshua

Display avatar information using JavaScript.

### Buyi

Create a player list.

Example:

```js
const players = [
  "Player 1",
  "Player 2",
  "Player 3"
];
```

Clicking a player displays their information.

### John

Create destinations:

```js
const destinations = [
  "School",
  "Home",
  "Work"
];
```

Selecting a destination displays information.

---

## 27. Session 2 Assessment

Ask students to explain:

1. **Question 1** — What is an array?
2. **Question 2** — Why do we need arrays?
3. **Question 3** — What is a condition?
4. **Question 4** — What does a loop do?
5. **Question 5** — What happens when a task is added?

Then ask each student to modify the application without your help.

---

## 28. Session 2 Homework

Give them three portfolio challenges.

### Project 1 — Tip Calculator

Requirements:

- Bill amount
- Tip percentage
- Calculate tip
- Calculate total

### Project 2 — Student Grade Calculator

Requirements:

- Student name
- Score
- Calculate grade
- Display result

### Project 3 — Product Filter

Requirements:

- At least six products
- Product name
- Category
- Price
- Category filters

Example:

- All
- Electronics
- Books
- Accessories
