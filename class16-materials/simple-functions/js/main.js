//---Easy
//create a function that subtracts two numbers and alerts the difference

function alertsTheDifference(num1, num2) {
    alert(num1 - num2);
}

//create a function that divides three numbers and console logs the quotient

function alertsTheQuotient(num1, num2, num3) {
    alert(num1 / num2 / num3);
}

//create a function that multiplys three numbers and returns the product

function alertsTheProduct(num1, num2, num3) {
    alert(num1 * num2 * num3);
}

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function returns3Nums(num1, num2, num3) {
    sumNum = num1 + num2;
    return sumNum / num3;
}

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function mathWhat(num1, num2, num3, num4) {
    product12 = num1 * num2;
    if (product12 > 100) {
        console.log(product12 + num3 + num4);
    } else if (product12 < 100) {
        console.log(product12 - (num3 - num4));
    } else if (product12 == 100) {
        product123 = num1 * num2 * num3;
        alert(product123 % num4);
    }
}


alertsTheSum(5, 5);
alertsTheQuotient(5, 5, 5);
alertsTheProduct(5, 5, 5);