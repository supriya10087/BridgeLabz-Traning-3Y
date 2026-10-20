// Q8: Dynamic Discount Evaluator

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let subtotalAfterCategoryDiscounts = 0;

console.log("Cart Discount Report");
console.log("--------------------");

for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10; // 10% discount
    } else if (product.category === "fashion") {
        discountRate = 0.05; // 5% discount
    }

    const discount = product.price * discountRate;
    const discountedPrice = product.price - discount;
    subtotalAfterCategoryDiscounts += discountedPrice;

    console.log(
        `${product.item}: Original ₹${product.price}, ` +
        `Discount ₹${discount.toFixed(2)}, Final ₹${discountedPrice.toFixed(2)}`
    );
}

// Apply an additional 5% discount if the original cart value is over ₹50,000.
const originalCartTotal = cart.reduce((sum, product) => sum + product.price, 0);
let overallDiscount = 0;

if (originalCartTotal > 50000) {
    overallDiscount = subtotalAfterCategoryDiscounts * 0.05;
}

const finalTotal = subtotalAfterCategoryDiscounts - overallDiscount;

console.log(`Original cart total: ₹${originalCartTotal.toFixed(2)}`);
console.log(`Total after category discounts: ₹${subtotalAfterCategoryDiscounts.toFixed(2)}`);
console.log(`Additional overall discount: ₹${overallDiscount.toFixed(2)}`);
console.log(`Final payable total: ₹${finalTotal.toFixed(2)}`);
