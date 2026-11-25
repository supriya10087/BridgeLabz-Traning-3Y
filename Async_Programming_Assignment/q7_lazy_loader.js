// Q7 – The Lazy Loader: Promise.allSettled() Practice
// Run with: node q7_lazy_loader.js
function loadProfile() {
  return new Promise((resolve, reject) => setTimeout(() =>
    Math.random() < 0.3 ? reject(new Error("Profile failed")) : resolve("Profile Loaded"), 2000));
}
function loadPosts() {
  return new Promise((resolve, reject) => setTimeout(() =>
    Math.random() < 0.3 ? reject(new Error("Posts failed")) : resolve("Posts Loaded"), 1500));
}
function loadMessages() {
  return new Promise((resolve, reject) => setTimeout(() =>
    Math.random() < 0.3 ? reject(new Error("Messages failed")) : resolve("Messages Loaded"), 1000));
}

async function loadDashboard() {
  const start = Date.now();
  console.log("Dashboard loading started at:", new Date(start).toLocaleTimeString());

  const results = await Promise.allSettled([
    loadProfile(), loadPosts(), loadMessages()
  ]);

  results.forEach((result, index) => {
    const moduleName = ["Profile", "Posts", "Messages"][index];
    if (result.status === "fulfilled") {
      console.log(`${moduleName} succeeded: ${result.value}`);
    } else {
      console.error(`${moduleName} failed: ${result.reason.message}`);
    }
  });

  const end = Date.now();
  console.log("Dashboard loading finished at:", new Date(end).toLocaleTimeString());
  console.log(`Total time taken: ${(end - start) / 1000} seconds`);
}
loadDashboard();
