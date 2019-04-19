let movies = require("./movies");

let pashasMovies = movies();
pashasMovies.favMovie = "Lord of the Ring";
console.log("Pasha's favorite movie is: " + pashasMovies.favMovie);
pashasMovies.printChappie();