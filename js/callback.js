function first() {
    //do smth
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
        console.log(`im learn: ${lang}`);
    callback();
}

function done() {
    setTimeout(function () {
    console.log('Im complete this lesson!');
}, 2000);
}

learnJS('JavaScript', done);