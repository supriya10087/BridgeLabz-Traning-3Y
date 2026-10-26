// Q2: String Manipulation Report

const productName = " wireless headphones PRO ";

// 1. Remove extra spaces at the beginning and end.
// 2. Convert the title to lowercase.
// 3. Capitalize the first letter of each word.
let cleanedTitle = productName.trim().toLowerCase();

cleanedTitle = cleanedTitle
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Replace "Pro" with "Pro Edition".
cleanedTitle = cleanedTitle.replace("Pro", "Pro Edition");

console.log(`Cleaned title: ${cleanedTitle}`);
console.log(`Title length: ${cleanedTitle.length}`);
