//Create an array of movies with at least three movies.

let movies = ["shrek 1", "shrek 2", "shrek 3"];

//Using the array from above, store the first movie in a variable

let bestMovie = movies[0];

//Get the length of the original array and store it in a new variable

let howManyMovies = movies.length;

//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?

let worstMovie = movies[(movies.length - 1)];

console.log(movies, bestMovie, howManyMovies, worstMovie);

