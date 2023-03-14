// The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

function range(min, max) {
    let range = [];
    for (i = min; i <= max; i++) {
        range.push(i);
    }
    return range;
}

range(1, 10);

function sum(array) {
    return array.reduce((total, current) => total + current);
}

console.log(sum(range(1, 10)));

// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

function reverseArray(array) {
    let reversed = [];
    array.forEach(item => {
        reversed.unshift(item);
    });
    return reversed;
}
console.log(reverseArray(["A", "B", "C"]))

function reverseArrayInPlace(array) {
    let length = Math.floor(array.length) / 2;
    for (i = 0; i <= length; i++) {
        temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);