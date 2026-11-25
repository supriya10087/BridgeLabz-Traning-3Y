// Q2 – Task Scheduler: Micro vs Macro Challenge
// Run with: node q2_task_scheduler.js
console.log("Start");

setTimeout(() => console.log("setTimeout callback (macrotask)"), 0);

Promise.resolve().then(() => console.log("Promise.then callback (microtask)"));

console.log("End");

// Expected order: Start, End, Promise.then callback, setTimeout callback.
// Promise callbacks run from the microtask queue before the next macrotask.
