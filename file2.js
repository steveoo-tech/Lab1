
var favoriteMovies = [];

addFavoriteMovie("The Dark Knight Rises");
addFavoriteMovie("Pulp Fiction");
addFavoriteMovie("Superbad");

function addFavoriteMovie(movieName){
    if (movieName.includes("The") != true){
        favoriteMovies.push(movieName);
    }
}


var movieCount = favoriteMovies.length;
function printFavoriteMovies(){
    console.log("Favorite Movies: .." + movieCount);
    var i = 0;
    while (i < movieCount){
        console.log(favoriteMovies[i]);
        i++
        
    }


}



printFavoriteMovies();