// Q6. Prototype chain: Person -> Faculty -> Professor
function Person(name) {
    this.name = name;
}

Person.prototype.introduce = function () {
    console.log("Person name:", this.name);
};

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function () {
    console.log("Department:", this.department);
};

function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSubject = function () {
    console.log("Subject:", this.subject);
};

const professor1 = new Professor(
    "Dr. Sharma",
    "Computer Science",
    "JavaScript"
);

// A Professor object can use methods from all three levels.
professor1.introduce();       // Person method
professor1.showDepartment();  // Faculty method
professor1.showSubject();     // Professor method
