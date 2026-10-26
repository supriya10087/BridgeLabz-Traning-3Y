"use strict";

// Q6 – Pyramid Pattern Generator
// Default height is 5. Change the value to test another user-input height.
const userInput = ""; // Example: "4"; leave blank to use default 5.
const parsedHeight = Number(userInput);
const height = userInput.trim() === "" ? 5 : parsedHeight;

if (!Number.isInteger(height) || height < 1) {
    console.log("Please provide a positive whole-number height.");
} else {
    for (let row = 1; row <= height; row++) {
        let pattern = "";
        for (let column = 1; column <= row; column++) {
            pattern += "* ";
        }
        console.log(pattern.trim());
    }
}

// var comparison: `var` is function-scoped, while `let` is block-scoped.
// Reusing a var loop variable can overwrite its value; inspect row/column in the debugger.
// Strict mode catches undeclared assignments, e.g. `counter = 1` would throw ReferenceError.
