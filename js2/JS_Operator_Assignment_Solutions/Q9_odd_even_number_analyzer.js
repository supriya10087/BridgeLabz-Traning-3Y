// Q9: Odd-Even Number Analyzer

const results = [];

for (let number = 1; number <= 30; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
        results.push(`${number}: FizzBuzz`);
    } else if (number % 2 === 0) {
        results.push(`${number}: Even`);
    } else {
        results.push(`${number}: Odd`);
    }
}

console.log("Odd-Even Number Analyzer (1-30)");
console.log("--------------------------------");
console.log(results.join("\n"));
