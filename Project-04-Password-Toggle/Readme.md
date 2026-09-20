# Project 04 — Password Show/Hide

**Difficulty:** Intermediate  
**Technology:** HTML / CSS / JavaScript  
**Time Target:** 10–12 minutes

---

## Problem Statement

Complete the `togglePassword()` function to show or hide the password by alternating the input type between `password` and `text`.

---

## Requirements

- Complete the `togglePassword()` function.
- Toggle the password input between `password` and `text`.
- Keep the button label synchronized with the current state:
  - `Show Password` when the password is hidden.
  - `Hide Password` when the password is visible.
- Preserve the entered password while toggling.

---

## Concepts Practiced

- DOM selection using `getElementById()`
- Reading and changing element attributes
- Using the `.type` property of an `<input>`
- Changing button text using `.textContent`
- Conditional statements
- Event handling
- Toggling between two UI states

---

## Constraints

- Do not modify the supplied HTML.
- Keep the existing HTML IDs.
- Keep the existing function name and event wiring.
- Keep the supplied CSS unchanged.
- Do not clear or replace the entered password while toggling.

---

## Expected Behaviour

### Initial State

The password is masked:

```text
Password: •••••••••
Button: Show Password