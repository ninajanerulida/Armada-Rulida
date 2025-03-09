//Exercise 1: Writing Your First Callback Function
function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero"; // Handling division by zero
    }
    return a / b;
}

console.log(calculate(5, 3, add));       // Output: 8
console.log(calculate(4, 2, multiply));  // Output: 8
console.log(calculate(10, 4, subtract)); // Output: 6
console.log(calculate(8, 2, divide));    // Output: 4
console.log(calculate(5, 0, divide));    // Output: "Error: Division by zero"


//Exercise 2: Using Callbacks with setTimeout

function delayedMessage(message, delay, beforeCallback, afterCallback) {
    beforeCallback(); // Runs before the delay starts

    setTimeout(() => {
        afterCallback(message); // Runs after the delay
    }, delay);
}

delayedMessage(
    "Hello, world!", 
    2000, 
    function() {
        console.log("Starting delay...");
    }, 
    function(msg) {
        console.log(msg);
    }
);
//output:
//Starting delay...
// (After 2 seconds)
// Hello, world!



//Exercise 3: Looping with Callbacks

function repeatTask(times, callback) {
    for (let i = 0; i < times; i++) {
        if (callback(i) === false) {
            break; // Stop the loop if callback returns false
        }
    }
}

repeatTask(5, function(index) {
    console.log("Iteration:", index);
    if (index === 2) {
        return false; // Stop early when index reaches 2
    }
});
//output:
// Iteration: 0
// Iteration: 1
// Iteration: 2
