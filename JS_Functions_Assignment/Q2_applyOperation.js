// Q2. Apply a callback operation to every number in an array
function applyOperation(numbers, operation) {
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        result.push(operation(numbers[i]));
    }

    return result;
}

const numbers = [1, 2, 3, 4];

// Double each number
const doubled = applyOperation(numbers, function (num) {
    return num * 2;
});

// Square each number
const squared = applyOperation(numbers, function (num) {
    return num * num;
});

console.log("Doubled:", doubled); // [2, 4, 6, 8]
console.log("Squared:", squared); // [1, 4, 9, 16]
