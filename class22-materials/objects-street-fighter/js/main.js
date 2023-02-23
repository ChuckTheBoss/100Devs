//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MakeFighter(country, style, outfit, color) {
    this.country = country;
    this.style = style;
    this.outfit = outfit;
    this.color = color;
    this.move1 = function () {
        alert(`You'll feel the wrath of ${country} upon you!`)
    }
    this.move2 = () => {
        alert("hiya!")
    }
    this.move3 = () => {
        alert(`Magic ${color} attack!`)
    }
}

let ken = new MakeFighter("USA", "Loose Cannon", "Karate Robes", "Blue");

ken.move1();
