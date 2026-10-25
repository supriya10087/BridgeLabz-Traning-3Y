"use strict";

// Q3 – Transaction Validator
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

for (let index = 0; index < transactions.length; index++) {
    const transaction = transactions[index];

    try {
        if (transaction === null) {
            const error = new Error("NullTransactionError: transaction is null");
            error.name = "NullTransactionError";
            throw error;
        }
        if (transaction.id === undefined || transaction.amount === undefined) {
            const error = new Error("MissingFieldError: id or amount is missing");
            error.name = "MissingFieldError";
            throw error;
        }
        if (transaction.amount < 0) {
            const error = new Error("NegativeAmountError: amount cannot be negative");
            error.name = "NegativeAmountError";
            throw error;
        }
        valid.push(transaction);
        console.log(`Transaction ${transaction.id} is valid.`);
    } catch (error) {
        invalid.push({ index: index + 1, transaction, type: error.name, message: error.message });
        console.log(`Transaction at position ${index + 1} failed: ${error.message}`);
        // Debug tip: set a breakpoint on this line and inspect index, transaction, valid, invalid.
    }
}

console.log("\\nValid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log(`Summary: ${valid.length} successful, ${invalid.length} failed.`);
