const arr = [1, 32, 3, 14, 557, 9];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// console.log(arr.length);

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} inner arr ${arr}`);
// });





// arr.pop();
// arr.push(111);
// console.log(arr);

// for( let i = 0 ; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (let value of arr){
//     console.log(value);
// }

// const str = prompt('', '');
// const products = str.split(',');
// products.sort();

// console.log(products.join('; ')); 

// const styles = ['Джаз', 'Блюз'];

// styles.push('rock&roll');
// console.log(styles);

// styles.pop('Блюз');
// console.log(styles);
