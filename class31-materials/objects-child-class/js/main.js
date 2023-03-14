//Create an a class and extend it - Can be anything you would like it to be! 

class Animal {
    constructor(name) {
        this.name = name
    }
    speak() {
        console.log(`${this.name} makes a sound`)
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name)
        this.breed = breed
    }
}
class Cat extends Animal {
    constructor(name, coat) {
        super(name)
        this.coat = coat;
    }
    drink() {
        console.log(`${this.name} sips milk`)
    }
}

let simba = new Dog('Simba', 'Sheperd')
let charlie = new Cat("charlie", "feline");