// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let favoriteFood = "burgers";
favoriteFood = "steak";
alert(favoriteFood);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let name = "Collin";
alert(name.charAt(1));


// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function crazyMath(num1, num2, num3) {
    alert((num1 / num2) * num3);
}

crazyMath(54, 67, 3);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function cubert(num) {
    console.log(Math.cbrt(num))
}

cubert(27);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function summerIsIt(month) {
    if (month === "July" || month === "June" || month === "August") {
        alert("YAY")
    } else {
        alert("Booo")
    }
}
summerIsIt("August")

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skipFive(num) {
    for (i = 1; i <= num; i++) {
        if (i % 5 !== 0) {
            console.log(i)
        } else {
            console.log("")
        }
    }
}
skipFive(99)