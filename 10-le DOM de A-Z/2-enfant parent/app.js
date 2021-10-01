const liste = document.querySelector('ul');

console.log(liste);
console.log(liste.children);
console.log(liste.childNodes);
console.log(liste.firstElementChild);
console.log(liste.lastElementChild);

const enfant = document.querySelector('li');

console.log(enfant.parentNode);
console.log(enfant.parentElement);


const i2 = document.querySelector('.i2');
console.log(i2.nextSibling);
console.log(i2.nextElementSibling);
console.log(i2.previousElementSibling);