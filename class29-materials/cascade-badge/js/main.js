//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 

function reverse(list) {
    console.log(list.reverse());
}

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function compare(a, b) {
    let aTot = a.reduce((total, current) => total + current ** 2, 0);
    let bTot = b.reduce((total, current) => total + current ** 2, 0);
    return (aTot > bTot);
};

console.log(compare([1, 2, 3, 4], [5, 6, 7, 9]));

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
stuff = [22, -6, 32, 82, 9, 25];

console.log(stuff.filter(num => num % num.indexOf() === 0))

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.