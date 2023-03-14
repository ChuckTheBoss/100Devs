class Square {
    constructor(num) {
        this.num = num;
        document.querySelector(`.square.${this.num}`).addEventListener("click", () => {
            let xsqaureFilled = ticTacToe.count % 2 !== 0 && document.querySelector(`.square.${this.num}`).innerText === "";
            let osqaureFilled = ticTacToe.count % 2 === 0 && document.querySelector(`.square.${this.num}`).innerText === "";
            if (xsqaureFilled) {
                document.querySelector(`.square.${this.num}`).innerText = "X";
                ticTacToe.player1.push(this.num);
                console.log(ticTacToe.player1);
                ticTacToe.count++;
            } else if (osqaureFilled) {
                document.querySelector(`.square.${this.num}`).innerText = "O";
                ticTacToe.player2.push(this.num);
                console.log(ticTacToe.player2);
                ticTacToe.count++;
            }
            ticTacToe.checkWin();
        });
    }
};

class Game {
    constructor() {
        this.count = 1;
        this.player1 = [];
        this.player2 = [];
        this.squares = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
        this.squares.forEach(square => {
            let num = new Square(square);
            return num;
        });
        document.querySelector(".newGame").addEventListener("click", () => {
            this.player1 = [];
            this.player2 = [];
            document.querySelectorAll(".square").innerText = "";
        })
    }
    checkWin() {
        let win1 = this.player1.includes("one") && this.player1.includes("two") && this.player1.includes("three");
        let win2 = this.player1.includes("four") && this.player1.includes("five") && this.player1.includes("six");
        let win3 = this.player1.includes("seven") && this.player1.includes("eight") && this.player1.includes("nine");
        let win4 = this.player1.includes("one") && this.player1.includes("four") && this.player1.includes("seven");
        let win5 = this.player1.includes("two") && this.player1.includes("five") && this.player1.includes("eight");
        let win6 = this.player1.includes("three") && this.player1.includes("six") && this.player1.includes("nine");
        let win7 = this.player1.includes("one") && this.player1.includes("five") && this.player1.includes("nine");
        let win8 = this.player1.includes("seven") && this.player1.includes("five") && this.player1.includes("three");

        let win11 = this.player2.includes("one") && this.player2.includes("two") && this.player2.includes("three");
        let win12 = this.player2.includes("four") && this.player2.includes("five") && this.player2.includes("six");
        let win13 = this.player2.includes("seven") && this.player2.includes("eight") && this.player2.includes("nine");
        let win14 = this.player2.includes("one") && this.player2.includes("four") && this.player2.includes("seven");
        let win15 = this.player2.includes("two") && this.player2.includes("five") && this.player2.includes("eight");
        let win16 = this.player2.includes("three") && this.player2.includes("six") && this.player2.includes("nine");
        let win17 = this.player2.includes("one") && this.player2.includes("five") && this.player2.includes("nine");
        let win18 = this.player2.includes("seven") && this.player2.includes("five") && this.player2.includes("three");

        if (win1 || win2 || win3 || win4 || win5 || win6 || win7 || win8) {
            document.querySelector("h1").innerText = "Player 1 wins!"
            return "Player 1 wins";
        } else if (win11 || win12 || win13 || win14 || win15 || win16 || win17 || win18) {
            document.querySelector("h1").innerText = "Player 2 wins!"
            return "Player 2 wins";
        } else {
            console.log("No one has won");
            return "No one has won"
        };
    };
};

let ticTacToe = new Game();

// WIN: one + two + three
// WIN: four + five + six
// WIN: seven + eight + nine
// WIN: one + four + seven
// WIN: two + five + eight
// WIN: three + six + nine
// WIN: one + five + nine
// WIN: seven + five + three 