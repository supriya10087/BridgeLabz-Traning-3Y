// Q4 – DevOps Delay: Async Timeout Race
// Run with: node q4_async_timeout_race.js
function deployServer(name, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) reject(new Error(`${name} deployment failed`));
      else resolve(`${name} deployed in ${delay / 1000} seconds`);
    }, delay);
  });
}

const serverA = deployServer("Server A", 2000);
const serverB = deployServer("Server B", 3000);

Promise.all([serverA, serverB])
  .then(results => console.log("Deployment completed for all servers:", results))
  .catch(error => console.error("At least one deployment failed:", error.message));

Promise.race([serverA, serverB])
  .then(result => console.log("Fastest response:", result))
  .catch(error => console.error("First response was a failure:", error.message));
