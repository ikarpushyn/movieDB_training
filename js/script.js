'use strict';

const numberOfFilms = +prompt('How many films u seen', '');

let a = prompt('Name of the last film u seen', '');
let b = prompt('Count the films', '');
let c = prompt('Name of the last film u seen', '');
let d = prompt('Count the films', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


