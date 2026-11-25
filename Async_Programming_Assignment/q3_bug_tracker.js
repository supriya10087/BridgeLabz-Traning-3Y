// Q3 – Bug Tracker: Callback to Promise Migration
// Run with: node q3_bug_tracker.js
function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bugs = ["UI glitch", "API timeout", "Login failure"];
      if (Math.random() < 0.5) {
        reject(new Error("Random API failure"));
      } else {
        resolve(bugs);
      }
    }, 1000);
  });
}

getBugs()
  .then(bugs => {
    console.table(bugs.map((bug, index) => ({ number: index + 1, bug })));
  })
  .catch(error => console.error("Could not fetch bugs:", error.message));
