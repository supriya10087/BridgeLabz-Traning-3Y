"use strict";

// Q7 – Smart Calculator
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
    constructor(operation) {
        super(`Unknown operation: ${operation}`);
        this.name = "InvalidOperationError";
    }
}

function calculate(operation, first, second) {
    switch (operation) {
        case "add": return first + second;
        case "divide":
            if (second === 0) throw new Error("DivisionByZeroError: cannot divide by zero.");
            return first / second;
        case "power": return first ** second;
        case "root":
            if (first < 0) throw new Error("NegativeRootError: cannot take the square root of a negative number.");
            return Math.sqrt(first);
        case "subtract": return first - second;
        default: throw new InvalidOperationError(operation);
    }
}

for (const operation of operations) {
    try {
        const result = calculate(operation, num1, num2);
        console.log(`${operation.toUpperCase()}: ${num1} and ${num2} => ${result}`);
    } catch (error) {
        console.log(`${operation.toUpperCase()} failed: ${error.name}: ${error.message}`);
    }
}

// Try calculate("multiply", num1, num2) to test InvalidOperationError.
