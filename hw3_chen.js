/* 

Student’s full name 

Homework 3 – Objects and exception handling in JS 

*/ 

const Movie = {
    title: "Spider-Man: Across the Spider-Verse",
    director: "Joaquim Dos Santos",
    year: 2023,

    getDetails: function(){
        return this.title + " " + this.director + " " + this.year           // displays all movie details
    }
}

const MovieCollection = {
    movies: [],

    addMovie: function(movie){
        this.movies.push(movie)                                             // adds movie name to array
        return movie + " added to collection"
    },

    removeMovie: function(title){
        try{
            for (let i = 0; i < this.movies.length; i++){                   // goes through array to see if the movie to be removed is in array
                if (this.movies[i] === title){
                    this.movies.splice(i, 1) 
                    return title + " removed from collection"               // if movie found, removes it else prompt error it does not exist
                }                                                           // return ends the loop
            }
            throw new Error("Movie does not exist in the collection.")
        } catch(error){
            return error.message    
        }
    },

    showMovies: function(){
        try{
            if (this.movies.length === 0){                                  // checks to see if array has items in it
                throw new Error("Movie collection is empty")                // else throws error that it's empty
            }
            return this.movies
        }catch(error){
            return error.message
        }
        
    }
}

let movie1 = "IT"                                                           // created movie variables to store the string title
let movie2 = "Up"

console.log(Movie.getDetails())                 
console.log(MovieCollection.showMovies())
console.log(MovieCollection.addMovie(movie1))
console.log(MovieCollection.addMovie(movie2))
console.log(MovieCollection.showMovies())
console.log(MovieCollection.removeMovie("IT"))
console.log(MovieCollection.removeMovie("Tarzan"))
console.log(MovieCollection.showMovies())