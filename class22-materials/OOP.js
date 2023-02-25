/* 

Encapsulation
Abstraction
Inheritance
Polymorphism

Encaplsulation
    Grouping properties and methods that act on data into an object. 
    This makes it possible to make functions with no parameters, since those parameters are defined as part of the object. 

Abstraction
    Hiding some of the properties and methods from the outside. 
    Like an internal API. And interface for complicated processes.

Inheritance
    Helps to reduce redundant code. Enables you to inherit properties from a parent/constructor. 

Polymorphism
    Many Forms
    gets rid of long if/else or switch/case statements by using .render() based on the object we are referencing. 


Objects in JavaScript
    define with object literals
    const circle = {};

    */

// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log("draw");
        }
    };
}
// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw")
    }
}
const another = new Circle(1);

// values are stored into the variable they are given:

let x = 10;
let y = x;

x = 20;
console.log(x, y) // 20, 10

// variables that reference an object are only pointing to the object, the object is stored somewhere else in memory. 

let a = { value: 10 };
let b = a;

a.value = 20;
console.log(a, b) // {value: 20}, {value: 20}

/* Primitives are copied by value
Objects are copied by reference

*/