//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


class Netflix {
    constructor(title, description, episodes, rating) {
        this.title = title;
        this.description = description;
        this.episodes = episodes;
        this.rating = rating;
        this.myList = false;
    }
    play() {
        console.log("Now playing");
    }
    rate() {
        this.rating = prompt("5/5 stars?");
    }
    addToMyList() {
        this.myList = true;
    }
}

let strangerThings = new Netflix("Stranger Things", "Scary kind of", 40, 5);

