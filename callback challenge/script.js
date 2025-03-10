// Task 1: Custom map function
function customMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

let numbers = [1, 2, 3];
let doubled = customMap(numbers, num => num * 2);
console.log(doubled); // [2, 4, 6]

// Task 2: Filter function
function filter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

let filteredResult = filter([1,2,3,4,15], val => val < 10);
console.log(filteredResult); // [1, 2, 3, 4]

// Task 3: Some function
function some(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}

let someResult = some([1,2,3,4], val => val > 5);
console.log(someResult); // false

// Task 4: Every function
function every(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}

let everyResult = every([1,2,3], val => val > 0);
console.log(everyResult); // true

// Task 5: Reduce function
function reduce(arr, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
}

let sum = reduce([1,2,3], (acc, num) => acc + num, 0);
console.log(sum); // 6

// Task 6: Includes function
function includes(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}

let includesResult = includes([1,2,3], val => val === 2);
console.log(includesResult); // true
