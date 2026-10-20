// Q1: Scope Conflict Resolver
// Demonstrates a global variable and a local variable inside a function.

let bonus = 5000; // Global variable

function calculateSalary(isPermanent) {
    let salary = 40000; // Local variable

    // The global bonus is added only for permanent employees.
    if (isPermanent === true) {
        salary = salary + bonus;
    }

    console.log(`Permanent employee: ${isPermanent}`);
    console.log(`Total salary: ${salary}`);
    console.log(`Global bonus inside function: ${bonus}`);
}

calculateSalary(true);
calculateSalary(false);

// The global variable is still accessible outside the function.
console.log(`Global bonus outside function: ${bonus}`);

// Changing isPermanent changes the calculation, not the global bonus.
