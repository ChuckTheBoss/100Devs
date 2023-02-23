//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let numbers = [1, 2, 3, 2, 4, 5, 65, 7, 8, 9]
let total = 0;
numbers.forEach(number => {
    total += number;
})
alert(total)

//let sum = nums.reduce((accumulator, count) => accumulator + count, 0);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let squares = []
numbers.forEach(number => {
    squares.push(number ** 2);
})
alert(squares);

//Create a function that takes string
//Print the reverse of that string to the console

function reverse(string) {
    return string.split("").reverse().join("");
}

alert(reverse("Your mom"))


//Create a function that takes in a string
//Alert if the string is a palindrome or not

function palindrome(string) {
    reversed = string.split("").reverse().join("");
    return string === reversed;
}

alert(palindrome("12345678987654321"))
alert(palindrome("conceded"))