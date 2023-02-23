//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
let evensOnly = (array) => {
    let evens = []
    array.forEach(number => {
        if (number % 2 === 0) {
            evens.push(number);
        }
    })
    return evens
}

console.log(evensOnly([1, 2, 3, 4, 5, 6, 7, 8, 9]));