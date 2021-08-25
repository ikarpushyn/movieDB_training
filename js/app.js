const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('How many films u seen', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films u seen', '');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('seen too few movies');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('u are casual');
        } else if (personalMovieDB.count >= 30) {
            console.log('funboy');
        } else {
            console.log('error');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genres = prompt(`Ur favorit genres ${i}`).toLowerCase();
            if (genres == null && genres === '') {
                console.log('u write wrong information');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genres;
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`favorite genre #${i+1} - is ${item}`);
        });
    },
};