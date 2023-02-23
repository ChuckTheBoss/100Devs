// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let drink = "Cola";
drink = "root beer";
console.log(drink.split(" ").join(''));

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let words = "apple, your mom, hello"
apple = words.includes("apple");
console.log(apple)

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors() {
    choice = 3 * (Math.random());
    if (choice < 1) {
        return "rock";
    } else if (choice < 2) {
        return "paper";
    } else if (choice < 3) {
        return "scissors";
    }
}


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function rockGame(choice) {
    robot = rockPaperScissors();
    player = choice;
    if (robot === player) {
        console.log("It's a tie!")
    } else if (robot === "scissors" && player === "rock" || robot === "paper" && player === "scissors" || robot === "rock" && player === "paper") {
        console.log("You've won!")
    } else {
        console.log("You've lost...")
    }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

let choices = (array) => {
    array.forEach(choice => {
        console.log(rockGame(choice));
    })
}

choices(["rock", "paper", "scissors"])