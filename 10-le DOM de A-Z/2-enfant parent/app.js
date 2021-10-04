const liste = document.querySelector('ul');

console.log(`log du ul :`, liste);
console.log(`selection des enfant  :`, liste.children); //sélectioner les enfant de 
console.log(`on sélectionce qui n'est pas un enfant les éspacement son compté et les commentaire:`, liste.childNodes);
console.log(`sélectionne le premier enfant :`, liste.firstElementChild);
console.log(`sélectionne le dernier enfant :`, liste.lastElementChild);

const enfant = document.querySelector('li');

console.log(`sélectionne le parent :`, enfant.parentNode); //sélection du parent
console.log(`sélectionne le parent :`, enfant.parentElement);


const i2 = document.querySelector('.i2');
console.log(`sélectionne le premier noeux  de même niveau:`, i2.nextSibling);
console.log(`sélectionne le premier élément de même niveau:`, i2.nextElementSibling); //selection le premier élement de même niveau
console.log(`sélectionne le dernier élément de même niveau:`, i2.previousElementSibling); //selection le dernier élement de même niveau