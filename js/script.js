'use strict';

const numberOfFilms = +prompt('How many films u seen', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


//for (ok)
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

//while (ok)
/* let i = 0;
while (i < 2) {
    i++;
    const  a = prompt('Name of the last movies u seen', ''),
           b = prompt('Count the movies', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('DONE');
    } else {
        console.log('error');
        i--;
    }
}  */

// do while (ok)
/* let i = 0;
do {
    const a = prompt('Name of the last movies u seen', ''),
        b = prompt('Count the movies', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('DONE');
    } else {
        console.log('error');
        i--;
    }
} while (i < 2); */





if (personalMovieDB.count < 10) {
    console.log('seen too few movies');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('u are casual');
} else if (personalMovieDB.count >= 30) {
    console.log('funboy');
} else {
    console.log('error');
}


console.log(personalMovieDB);