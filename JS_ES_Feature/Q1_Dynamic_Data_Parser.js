"use strict";

// Q1 – Dynamic Data Parser
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    console.log(`Item ${i + 1}: original=${stringValue}, Number=${numberValue}, Boolean=${booleanValue}, String="${stringValue}"`);

    // Empty/whitespace strings, "NaN", and values that do not represent numbers are invalid.
    const explicitlyInvalid = typeof value === "string" &&
        (value.trim() === "" || value === "NaN" || value === "100px");

    if (Number.isNaN(numberValue) || explicitlyInvalid) {
        invalidNumbers.push(value);
        console.log(`  INVALID numeric value: ${stringValue}`);
    } else {
        validNumbers.push(numberValue);
        console.log(`  VALID numeric value: ${numberValue}`);
    }
}

console.log("\\nValid numeric data:", validNumbers);
console.log("Invalid data:", invalidNumbers);
console.log(`Report: ${validNumbers.length} valid, ${invalidNumbers.length} invalid.`);
