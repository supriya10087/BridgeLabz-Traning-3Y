// Q4: Array Performance Analyzer

// Generate 8 random integer scores from 30 through 100.
const scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

// reduce() calculates the sum; divide by the number of scores for the average.
const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;

// filter() keeps scores that are at least 50.
const passedScores = scores.filter(score => score >= 50);

// map() creates a readable list of score labels.
const scoreLabels = scores.map((score, index) => `Student ${index + 1}: ${score}`);

console.log("Array Performance Analyzer");
console.log("--------------------------");
console.log(`Scores: ${scores.join(", ")}`);
console.log(`Highest score: ${highestScore}`);
console.log(`Lowest score: ${lowestScore}`);
console.log(`Average score: ${averageScore.toFixed(2)}`);
console.log(`Students passed (score >= 50): ${passedScores.length}`);
console.log("Individual results:");
console.log(scoreLabels.join("\n"));
