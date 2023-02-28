//Create a constructor with 4 properties and 3 methods

function Pizza(sauce, toppings, cheese) {
    this.sauce = sauce;
    this.toppings = toppings;
    this.cheese = cheese;
    this.eat = function () {
        console.log("nom nom nom");
    }
    this.heat = function () {
        console.log("baking baking baking done");
    }
    this.delivery = function () {
        console.log("30 minutes or it's free!")
    }
}

let pepperoni = new Pizza("tomato", ["pepperoni", "sausage", "bacon"], "mozzerella");