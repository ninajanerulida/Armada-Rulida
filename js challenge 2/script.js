// Task 1: Inventory Tracker

const inventory = ["apple", "banana", "cherry", "date", "elderberry"];
const inventoryCount = [10, 15, 5, 20, 7];

console.log("Inventory List:");
inventory.forEach((item, index) => {
  console.log(`${item}: ${inventoryCount[index]}`);
});

// Task 2: Alphabetical Sorting

const words = ["zebra", "apple", "mango", "cherry", "banana"];
const sortedWords = [...words].sort(); // Using spread operator to avoid mutating original array

console.log("Sorted Words:", sortedWords);

// Task 3: Unique Array Builder

const uniqueNumbers = new Set(); // Using Set to ensure uniqueness

while (uniqueNumbers.size < 10) {
  const randomNumber = Math.floor(Math.random() * 20) + 1;
  uniqueNumbers.add(randomNumber);
}

console.log("Unique Random Numbers:", Array.from(uniqueNumbers));

// Task 4: Triangle Checker

const sideA = 7;
const sideB = 10;
const sideC = 5;

const isValidTriangle =
  sideA + sideB > sideC &&
  sideB + sideC > sideA &&
  sideA + sideC > sideB;

console.log(
  isValidTriangle
    ? `The sides ${sideA}, ${sideB}, and ${sideC} form a valid triangle.`
    : `The sides ${sideA}, ${sideB}, and ${sideC} do not form a valid triangle.`
  );
