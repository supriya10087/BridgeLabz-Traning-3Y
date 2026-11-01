// Q1. Function that uses a callback
function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

function showEndMessage() {
    console.log("Welcome to the course!");
}

// Demonstrate the callback
greetUser("Supriya", showEndMessage);
