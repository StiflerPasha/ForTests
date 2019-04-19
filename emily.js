let movies = require("./movies");

let emilysMovies = movies();
emilysMovies.favMovie = "The Notebook";
console.log("Emily's favorite movie is: " + emilysMovies.favMovie);
emilysMovies.printAvatar();