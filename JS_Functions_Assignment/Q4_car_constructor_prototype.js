// Q4. Constructor function and a shared prototype method
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// This method is shared by all Car objects through the prototype.
Car.prototype.getDetails = function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const car1 = new Car("Toyota", "Innova");
const car2 = new Car("Honda", "City");

car1.getDetails();
car2.getDetails();
