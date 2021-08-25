const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');
    

box.style.backgroundColor = 'black';
box.style.width = '500px';

box.style.cssText = `background-color : pink; width: 600px `;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'black';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'black';
});

const div = document.createElement('div');
// const text = document.createTextNode('Here text');

div.classList.add('black');
document.querySelector('.wrapper').append(div);

// wrapper.prepend(div);
// wrapper.appendChild(div);

// hearts[0].before(div);
// wrapper.insertBefore(div, hearts[2]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);
// wrapper.replaceChild(circles[0],hearts[0]);
hearts[0].replaceWith(circles[0]);

div.innerHTML = '<h1>hello wrld</h1>' ;

div.insertAdjacentHTML('afterend', '<h2>HI</h2>');

// div.textContent = 'hello';