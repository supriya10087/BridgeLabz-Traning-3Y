// Q1: E-Commerce Product Manager (Classes + Objects)

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(discountPercent) {
        this.price = this.price - (this.price * discountPercent / 100);
    }

    displayDetails() {
        return `ID: ${this.id} | Name: ${this.name} | Price: ₹${this.price.toFixed(2)} | Category: ${this.category}`;
    }
}

// Create product objects and store them in an array.
const products = [
    new Product(1, "Keyboard", 1500, "Electronics"),
    new Product(2, "Notebook", 120, "Stationery"),
    new Product(3, "Headphones", 2200, "Electronics"),
    new Product(4, "Water Bottle", 450, "Accessories")
];

// Apply a 10% discount to the first product.
products[0].applyDiscount(10);

console.log("All Products:");
products.forEach(function (product) {
    console.log(product.displayDetails());
});

// Display products whose price is greater than ₹1000.
console.log("\\nProducts priced above ₹1000:");
products.filter(function (product) {
    return product.price > 1000;
}).forEach(function (product) {
    console.log(product.displayDetails());
});
