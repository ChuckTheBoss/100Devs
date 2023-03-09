//Create an espresso machine class that makes machines with 4 properties and 3 methods

class Machine {
    constructor(color, make, model, age) {
        this.color = color,
            this.make = make,
            this.model = model,
            this.age = age
    }
    espresso() {
        console.log("mmm");
    }
    coffee() {
        console.log("Disgusting")
    }
    latte() {
        console.log("delicious.")
    }
}
