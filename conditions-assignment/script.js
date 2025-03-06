// // Task 1: Grading System
// let score = 79; // Change this value to test different scores

// if (score >= 90) {
//     console.log("Grade A");
// } else if (score >= 80) {
//     console.log("Grade B");
// } else if (score >= 70) {
//     console.log("Grade C");
// } else if (score >= 60) {
//     console.log("Grade D");
// } else {
//     console.log("Grade F");
// }

// // Task 2: Weather Advisor
// let temperature = 40; // Change this value to test different temperatures

// if (temperature < 0) {
//     console.log("It's freezing outside! Bundle up!");
// } else if (temperature >= 0 && temperature <= 15) {
//     console.log("It's cold outside. Wear a jacket.");
// } else if (temperature >= 16 && temperature <= 30) {
//     console.log("The weather is nice. Enjoy your day!");
// } else {
//     console.log("It's hot outside. Stay hydrated!");
// }

// // Task 3: Eligibility Checker
// let age = 22; // Change this value to test different ages

// if (age < 13) {
//     console.log("You are too young for this activity.");
// } else if (age >= 13 && age <= 17) {
//     console.log("You need parental permission.");
// } else {
//     console.log("You are eligible for this activity.");
// }

// // Task 4: Ticket Price Calculator

// let age= 13;
// let isMember = false; // Change to false to test different scenarios

// if (age < 12) {
//     console.log("The ticket is free.");
// } else if (age >= 12 && isMember) {
//     console.log("The ticket costs $10.");
// } else {
//     console.log("The ticket costs $15.");
// }

// Task 5: Leap Year Checker
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log("Is 2024 a leap year?", isLeapYear(2024));
console.log("Is 1900 a leap year?", isLeapYear(1900));
console.log("Is 2000 a leap year?", isLeapYear(2000));
console.log("Is 2023 a leap year?", isLeapYear(2023));