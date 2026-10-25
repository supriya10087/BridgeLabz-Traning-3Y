"use strict";

// Q5 – Hoisting Lab: The Sequence Trap
// Original code's first console.log(score) prints undefined because var is hoisted.
// announce() works because function declarations are hoisted.
// let status is in the temporal dead zone until its declaration runs.
// Therefore startGame() before `let status = "ready"` would throw ReferenceError.

var score = 50;
function announce() {
    console.log("Game started");
}
let status = "ready";
function startGame() {
    console.log(status);
}

console.log(score);
announce();
startGame();

// Arrow-function comparison: variable declarations are hoisted differently from function declarations.
// Calling startArrow before this assignment would fail because startArrow is still undefined.
const startArrow = () => console.log(status);
startArrow();
