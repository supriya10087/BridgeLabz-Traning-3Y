// Q5 – Frontend Rush: Avoiding Callback Hell
// Run with: node q5_callback_hell.js
const stages = ["design", "build", "test", "deploy", "celebrate"];

function runStage(stage, callback) {
  setTimeout(() => {
    console.log(`${stage} completed`);
    callback();
  }, 1000);
}

// Nested callbacks demonstrate callback hell.
function runWithCallbacks(index = 0) {
  if (index >= stages.length) return;
  runStage(stages[index], () => runWithCallbacks(index + 1));
}

runWithCallbacks();

// Async/await version: uncomment to run this version instead.
// function runStagePromise(stage) {
//   return new Promise(resolve => setTimeout(() => {
//     console.log(`${stage} completed`);
//     resolve();
//   }, 1000));
// }
// async function runPipeline() {
//   for (const stage of stages) await runStagePromise(stage);
//   console.log("Pipeline complete");
// }
// runPipeline();
//
// async/await makes the sequence easier to read and maintain, while preserving
// the same asynchronous order and avoiding deeply nested callback functions.
