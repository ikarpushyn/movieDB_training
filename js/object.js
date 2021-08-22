const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
        value: '11',
        size: '33kb'
    },
    makeTest: function(){
        console.log('Test');
    }
};
options.makeTest();

const{border,bg,size} = options.colors;
console.log(border,bg);

// console.log(Object.keys(options).length);



// let counter = 0;
// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`options ${i} have value ${options[key][i]}`);
//             //counter++;

//         }
//     } else {
//         console.log(`options ${key} have value ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);
