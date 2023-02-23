//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function multiply(array) {
    let product = 1;
    array.forEach(number => {
        product = product * number;
    });
    alert(product)
}

multiply([1, 2, 3, 4, 5, 6, 7, 8, 9])