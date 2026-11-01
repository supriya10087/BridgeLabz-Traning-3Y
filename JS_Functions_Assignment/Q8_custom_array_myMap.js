// Q8. Add a custom myMap method to Array.prototype
// The method creates and returns a new array.
Array.prototype.myMap = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        // Match the basic map behavior: skip empty array slots.
        if (i in this) {
            result.push(callback(this[i], i, this));
        }
    }

    return result;
};

const numbers = [1, 2, 3];

const doubled = numbers.myMap(function (num) {
    return num * 2;
});

console.log(doubled); // [2, 4, 6]
