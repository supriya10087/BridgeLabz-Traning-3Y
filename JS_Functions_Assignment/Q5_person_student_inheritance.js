// Q5. Constructor-function inheritance using prototypes
function Person(name) {
    this.name = name;
}

Person.prototype.printName = function () {
    console.log("Name:", this.name);
};

function Student(name, branch) {
    // Call Person's constructor to initialize the name property.
    Person.call(this, name);
    this.branch = branch;
}

// Student.prototype inherits from Person.prototype.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.printBranch = function () {
    console.log("Branch:", this.branch);
};

const student1 = new Student("Supriya", "Computer Science");

student1.printName();
student1.printBranch();

// Demonstrate the prototype chain.
console.log(
    "Student inherits Person methods:",
    Object.getPrototypeOf(Student.prototype) === Person.prototype
);
