//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods

function TonyHawk(height, board, wheels, tunes) {
    this.height = height;
    this.board = board;
    this.wheels = wheels;
    this.tunes = tunes;
    this.kickflip = () => {
        alert("DO A KICKFLIP")
    }
    this.special = () => {
        alert("My " + board + " allows me to show off.")
    }
    this.ollie = () => {
        alert("The " + wheels + " should leave the ground.")
    }
}

let tonyHawk = new TonyHawk(615, "Black Beauty", "white-walls", "Blink 182");

console.log(tonyHawk.special())