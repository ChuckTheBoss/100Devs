//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let array = [1, 2, 3, 4, 5]

let sum = 0;
array.forEach(num => {
    sum += num;
});
alert(sum);


//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let squared = [];
array.forEach(num => {
    squared.push(num ** 2);
})
alert(squared);

//Create a function that takes string
//Print the reverse of that string to the console

function reversed(string) {
    console.log(string.split('').reverse().join(''))
}
reversed("Your mom is so funny");

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function palindrome(string) {
    alert(string.split('').reverse().join('') === string)
}
palindrome("racecar")
