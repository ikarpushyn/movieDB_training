const btn = document.querySelector('button'),
        btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');
// btn.onclick = function() {
//     alert('Click');
// };

// btn.onclick = function() {
//     alert('Hi');
// };

// btn.addEventListener('click', () => {
//     alert('HI');
// });

// btn.addEventListener('click', () => {
//     alert('Click');
// });
// btn.addEventListener('mouseenter', () => {
//     console.log('hover');
// });
// btn.addEventListener('mouseenter', (e) => {
//     console.log(e.target);
//     e.target.remove();
// });
// btn.addEventListener('click', (e) => {
//     e.target.remove();
// });

////
// let i = 0;
// const deleteElement = (e) =>{
//     console.log(e.target);
//     i++;
//     if (i == 1){
//         btn.removeEventListener('click', deleteElement);
//     }
// };

// btn.addEventListener('click', deleteElement);


const deleteElement = (e) =>{
    console.log(e.target);
    console.log(e.type);


};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// btns.forEach(btn => {
//     btn.addEventListener('click', deleteElement);
// });

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once : true});
}); //

const link = document.querySelector('a');

link.addEventListener('click', (event) =>{
    event.preventDefault();

    console.log(event.target);
});