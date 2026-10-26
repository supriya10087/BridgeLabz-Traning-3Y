// Q7: Customer Feedback Processor

const feedback = "Great product! Fast delivery and amazing sound quality.";

const wordCount = feedback.trim().split(/\s+/).length;
const lowerFeedback = feedback.toLowerCase();
const containsNegativeWord =
    lowerFeedback.includes("bad") || lowerFeedback.includes("poor");

const result = containsNegativeWord
    ? "Needs Improvement"
    : "Positive Feedback";

console.log("Customer Feedback Report");
console.log("-------------------------");
console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${wordCount}`);
console.log(`Contains 'bad' or 'poor': ${containsNegativeWord}`);
console.log(`Result: ${result}`);
