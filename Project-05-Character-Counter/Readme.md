# Project 05 — Character Counter

**Difficulty:** Intermediate  
**Technology:** HTML / CSS / JavaScript  
**Time Target:** 12–15 minutes

---

## Problem Statement

Complete the `updateCount()` function so that `#count` immediately displays the number of characters entered in the textarea.

The counter should update whenever the user types, pastes, or deletes text.

---

## Requirements

- Complete the `updateCount()` function.
- Read the current value from the textarea.
- Display the current character count in `#count`.
- Update the counter immediately whenever the textarea changes.
- Keep the existing maximum limit of **100 characters**.
- Ensure the character count remains accurate when:
  - Typing text
  - Pasting text
  - Deleting text
  - Clearing the textarea

---

## Concepts Practiced

- DOM selection using `getElementById()`
- Reading textarea values using `.value`
- Using the `.length` property
- Handling the `input` event
- Updating DOM content using `.textContent`
- Working with maximum input limits

---

## Constraints

- Do not modify the supplied HTML.
- Keep the existing HTML IDs.
- Keep the existing function name and event wiring.
- Keep the supplied CSS unchanged.
- Do not change the maximum character limit of 100.

---

## Expected Behaviour

### Initial State

```text
0 / 100