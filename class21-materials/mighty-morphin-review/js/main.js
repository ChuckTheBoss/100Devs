// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let holiday = "Juneteenth";
holiday = "Christmas";
console.log(holiday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let mama = "Just killed a man"
mamama = mama.slice(-3)
console.log(mamama);

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

let minusFive = (num1, num2, num3, num4, num5) => {
    let total = 100 - num1 - num2 - num3 - num4 - num5;
    total = Math.abs(total);
    alert(total);
}
//minusFive(99, 80, 55, 3, 2);


// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

let minMax = (num1, num2, num3) => {
    let max = Math.max(num1, num2, num3);
    let min = Math.min(num1, num2, num3);
    console.log(min, max);
}
minMax(1, 2, 3);
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

let headsOrTails = () => {
    let flip = 2 * Math.random();
    if (flip >= 1) {
        return "Heads"
    } else {
        return "Tails"
    }
}


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
let checkHeadsOrTails = (its) => {
    let heads = 0;
    let tails = 0;

    for (i = 0; i < its; i++) {
        flip = headsOrTails();
        if (flip === "Heads") {
            heads += 1;
        } else {
            tails += 1;
        }
    }
    return [heads, tails];
}
console.log(checkHeadsOrTails(1000));