// Q3. Object property and the value of `this`
const user = {
    name: "Supriya",

    // An arrow function does not get its own `this`.
    showName: () => {
        console.log("Arrow function name:", this.name);
    }
};

user.showName(); // In a typical browser/Node.js script, this.name is undefined.

// Fix: use a normal function so `this` refers to the object calling it.
user.showName = function () {
    console.log("Normal function name:", this.name);
};

user.showName(); // Supriya
