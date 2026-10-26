"use strict";

// Q9 – JSON Audit
const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];
const under18 = [];

for (let index = 0; index < rawData.length; index++) {
    const lineNumber = index + 1;
    try {
        const parsed = JSON.parse(rawData[index]);

        if (parsed.user === undefined || parsed.age === undefined) {
            throw new Error("Missing required key: user or age");
        }

        const age = Number(parsed.age);
        if (!Number.isFinite(age)) {
            throw new Error("Age is not a valid number");
        }

        const record = { ...parsed, age };
        clean.push(record);
        if (age < 18) under18.push(record);
        console.log(`Line ${lineNumber}: valid JSON record for ${record.user}.`);
    } catch (error) {
        errors.push({ line: lineNumber, message: error.message });
        console.log(`Line ${lineNumber}: ERROR - ${error.message}`);
        // Set a breakpoint here to observe control jumping from try to catch.
    }
}

console.log("\\nClean data:", clean);
console.log("Errors:", errors);
console.log("Users under 18:", under18);
console.log(`Audit summary: ${clean.length} valid, ${errors.length} invalid.`);
