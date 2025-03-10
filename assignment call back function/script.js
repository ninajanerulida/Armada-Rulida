// Task 1: Custom Array Filter
function customFilter(arr, callback) {
    let result = [];
    for (let item of arr) {
        if (callback(item)) {
            result.push(item);
        }
    }
    return result;
}

function isEven(num) {
    return num % 2 === 0;
}

var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = customFilter(numbers, isEven);
console.log(evenNumbers);  // Output: [2, 4, 6]

// Task 2: Countdown Timer
function countdown(start, callback) {
    let current = start;
    let interval = setInterval(() => {
        callback(current);
        if (current === 0) {
            clearInterval(interval);
        }
        current--;
    }, 1000);
}

function displayNumber(num) {
    console.log(num);
}

countdown(5, displayNumber);  // Output: 5 4 3 2 1 0 (with 1-second delay between each)

// Task 3: Simple Event Listener
function createButton(buttonText, callback) {
    let button = document.createElement("button");
    button.textContent = buttonText;
    button.addEventListener("click", callback);
    document.body.appendChild(button);
}

function buttonClicked() {
    console.log("Button Clicked!");
}

createButton("Click Me", buttonClicked);

// Task 4: Task Runner
function runTasks(tasks) {
    for (let task of tasks) {
        task();
    }
}

function task1() {
    console.log("Task 1 completed");
}

function task2() {
    console.log("Task 2 completed");
}

function task3() {
    console.log("Task 3 completed");
}

runTasks([task1, task2, task3]);

// Task 5: Interactive Quiz Game (Extra Mile)
function askQuestion(question, choices, correctAnswer, callback) {
    let userAnswer = prompt(`${question}\n${choices.join("\n")}`);
    callback(userAnswer === correctAnswer);
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
}

askQuestion("What is 2 + 2?", ["1", "2", "3", "4"], "4", checkAnswer);