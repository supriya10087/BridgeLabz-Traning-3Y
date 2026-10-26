// Q6: Event-Based Counter Simulation

let count = 0;

function increment() {
    count++;
    console.log(`Count after increment: ${count}`);
}

function decrement() {
    count--;
    console.log(`Count after decrement: ${count}`);
}

// A nested function can read the count variable from its outer scope.
function showCounterScope() {
    function displayCount() {
        console.log(`Nested function can access count: ${count}`);
    }

    displayCount();
}

// Simulate click events by calling the functions manually.
increment(); // 1
increment(); // 2
decrement(); // 1
showCounterScope();
