// Q1 – The Startup Morning: Async Coffee Maker
// Run with: node q1_coffee_maker.js
function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => Math.random() < 0.15
      ? reject(new Error("Water boiling failed"))
      : resolve("Water boiled"), 1000);
  });
}
function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => Math.random() < 0.15
      ? reject(new Error("Coffee brewing failed"))
      : resolve("Coffee brewed"), 1500);
  });
}
function pourCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => Math.random() < 0.15
      ? reject(new Error("Pouring coffee failed"))
      : resolve("Coffee poured"), 1200);
  });
}

console.log("Starting coffee preparation...");
boilWater()
  .then(result => { console.log(result); return brewCoffee(); })
  .then(result => { console.log(result); return pourCoffee(); })
  .then(result => {
    console.log(result);
    console.log("Coffee ready for the team!");
  })
  .catch(error => console.error("Coffee process failed:", error.message));
