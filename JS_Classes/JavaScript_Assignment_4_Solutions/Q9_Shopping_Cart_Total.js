// Q9: Shopping Cart Total (Classes + RegExp for Coupon)

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        if (price < 0 || quantity <= 0) {
            console.log("Price must not be negative and quantity must be greater than zero.");
            return;
        }

        this.items.push({ name: name, price: price, quantity: quantity });
    }

    getTotal() {
        return this.items.reduce(function (total, item) {
            return total + item.price * item.quantity;
        }, 0);
    }

    applyCoupon(couponCode) {
        const couponPattern = /^(SAVE20|DISC10)$/i;

        if (!couponPattern.test(couponCode.trim())) {
            console.log("Invalid coupon. Use SAVE20 or DISC10.");
            return this.getTotal();
        }

        const discountPercent = couponCode.trim().toUpperCase() === "SAVE20" ? 20 : 10;
        const originalTotal = this.getTotal();
        const finalTotal = originalTotal - (originalTotal * discountPercent / 100);

        console.log(`Coupon ${couponCode.toUpperCase()} applied: ${discountPercent}% off.`);
        return finalTotal;
    }

    displayItems() {
        console.log("Shopping Cart:");
        this.items.forEach(function (item) {
            console.log(`${item.name} | ₹${item.price.toFixed(2)} x ${item.quantity} = ₹${(item.price * item.quantity).toFixed(2)}`);
        });
    }
}

const cart = new Cart();
cart.addItem("T-Shirt", 500, 2);
cart.addItem("Backpack", 1200, 1);
cart.addItem("Notebook", 100, 3);

cart.displayItems();
console.log(`\\nSubtotal: ₹${cart.getTotal().toFixed(2)}`);

const couponCode = "SAVE20"; // Try "DISC10" or an invalid code.
const finalTotal = cart.applyCoupon(couponCode);
console.log(`Final Total: ₹${finalTotal.toFixed(2)}`);
