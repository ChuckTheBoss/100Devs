//Create a Pizza object that has four properties and three methods

let pizza = {};
pizza.sauce = "alfredo";
pizza.cheese = "mozzerrella";
pizza.toppings = ["chicken", "parmesan"];
pizza.eat = function () {
    console.log("nom nom nom");
}
pizza.heat = () => {
    console.log("baking baking baking done");
}
pizza.delivery = () => {
    console.log("30 minutes or it's free!");
}