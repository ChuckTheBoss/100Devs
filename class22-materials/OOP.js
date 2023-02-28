/* 

Encapsulation
Abstraction
Inheritance
Polymorphism

1. Encaplsulation
    Grouping properties and methods that act on data into an object. 
    This makes it possible to make functions with no parameters, since those parameters are defined as part of the object. 

2. Abstraction
    Hiding some of the properties and methods from the outside. 
    Like an internal API. And interface for complicated processes.

3. Inheritance
    Helps to reduce redundant code. Enables you to inherit properties from a parent/constructor. 

4. Polymorphism
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
let circle = {};
circle.location = { x: 1 }; // dot notation
circle["location"] = { x: 1 }; // bracket notation

// useful for dynamically accessing a property, e.g.
const propertyName = "location";
circle[propertyName] = { x: 1 };

/* Abstraction
Complexity within the object, but the public interface should be simple. 
Hide the details. Show the essentials. 
declaring something with "this." will bind the property to the object. 
However, you can instead declare a function or property as a variable, and it will stay contained within that function and not be accessible. 

*/
function CircleOther(radius) {
    this.radius = radius;
    let defaultLocation = { x: 0, y: 0 }; // not accessible outside of object. 
    let computeOptimumLocation = function (factor) { // not accessible outside of object. 
        // ...
    }
    this.draw = function () {
        computeOptimumLocation(0.1);
        console.log("draw");
    }
}

// Stopwatch exercise

function Stopwatch() {
    let startTime = endTime = 0;
    let duration;
    this.start = function () {
        if (startTime !== 0) {
            throw new Error("Stopwatch has already started");
        };
        startTime = Date.now();
        console.log("Stopwatch has started");
    };
    this.stop = function () {
        if (startTime === 0) {
            throw new Error("Stopwatch has not started");
        }
        endTime = Date.now();
        console.log("Stopwatch has stopped");
    };
    this.reset = function () {
        startTime = endTime = duration = 0;
    };
    Object.defineProperty(this, "duration", {
        get: function () {
            duration = (endTime - startTime) / 1000;
            return duration;
        }
    });
};

let sw = new Stopwatch();