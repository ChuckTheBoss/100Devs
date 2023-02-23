//Arrays

//Create and array of tv shows. Loop through and print each show to the console

let tvShows = ["Aladdin", "Power Rangers", "Sabrina", "Breaking Bad"]

tvShows.forEach(show => {
    console.log(show)
});

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

let numbers = [123, 55, 189, 453, 882, 48, 125, 8, 156, 78, 1515458, 4812, 1587891, 248, 454512, 4545, 45, 45, 159];

let returnEvens = (array) => {
    let evens = [];
    array.forEach(num => {
        if (num % 2 === 0) {
            evens.push(num)
        }
    })
    return evens
}
console.log(returnEvens(numbers));

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

let sumsum = (array) => {
    let sorted = array.sort((a, b) => a - b);
    let low2 = sorted[1];
    let high2 = sorted[sorted.length - 2];
    let sum = low2 + high2
    return sum
}

console.log(sumsum(numbers));