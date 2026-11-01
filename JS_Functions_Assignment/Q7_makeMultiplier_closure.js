// Q7. Return a function that remembers the multiplier (closure)
function makeMultiplier(multiplier) {
    // The returned function remembers `multiplier` from the outer function.
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);

console.log(triple(5)); // 15

// Explanation:
// makeMultiplier(3) returns a function with multiplier = 3.
// Even after makeMultiplier has finished, the returned function
// remembers that value. This is called a closure.
