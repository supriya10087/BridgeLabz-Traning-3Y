// Q6: Employee Management System (Classes + Object Methods)

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        if (percent < 0) {
            console.log("Bonus percentage cannot be negative.");
            return;
        }
        this.salary += this.salary * percent / 100;
    }
}

const employees = [
    new Employee(1, "Aarav", "IT", 40000),
    new Employee(2, "Diya", "HR", 35000),
    new Employee(3, "Rohan", "Finance", 45000),
    new Employee(4, "Meera", "IT", 50000),
    new Employee(5, "Kabir", "Sales", 30000)
];

// Apply a 10% bonus to each employee, then display their annual salary.
employees.forEach(function (employee) {
    employee.applyBonus(10);
    console.log(`${employee.name} (${employee.department}) - Annual Salary: ₹${employee.getAnnualSalary().toFixed(2)}`);
});

// reduce() adds all annual salaries to find the company's annual salary payout.
const totalAnnualPayout = employees.reduce(function (total, employee) {
    return total + employee.getAnnualSalary();
}, 0);

console.log(`\\nTotal Annual Company Payout: ₹${totalAnnualPayout.toFixed(2)}`);
