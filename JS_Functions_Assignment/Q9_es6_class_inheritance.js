// Q9. Rewrite Person -> Student inheritance using ES6 classes
class Person {
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log("Name:", this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        // super() calls the Person constructor.
        super(name);
        this.branch = branch;
    }

    printBranch() {
        console.log("Branch:", this.branch);
    }
}

const student1 = new Student("Supriya", "Computer Science");

student1.printName();
student1.printBranch();

// The methods are available through the class prototype chain,
// just as in the constructor-function example in Q5.
console.log(
    "Student inherits Person methods:",
    Object.getPrototypeOf(Student.prototype) === Person.prototype
);
