
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many films u seen', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films u seen', '');
        }
    }
};


//for (ok)
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Name of the last movies u seen', ''),
            b = prompt('Count the movies', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('DONE');
        } else {
            console.log('error');
            i--;
        }
    }
}
rememberMyFilms();

function detectLevel() {
    if (personalMovieDB.count < 10) {
        console.log('seen too few movies');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('u are casual');
    } else if (personalMovieDB.count >= 30) {
        console.log('funboy');
    } else {
        console.log('error');
    }
}

//detectLevel();
// 

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function toggleVisibleMyDB() {
    if (personalMovieDB.privat == false) {
        personalMovieDB.privat = true;
    } else if (personalMovieDB.privat == true){
        personalMovieDB.privat = false;
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ur favorit genres ${i}`);
        if (genre != null && genre != '') {
            personalMovieDB.genres[i - 1] = genre;
        } else {
            i--;
        }
    }
}
writeYourGenres();