const premierTitre = document.querySelector('.premiertitre');
const seconTitre = document.getElementById('premier-id');
const titreNu = document.querySelector('h3');
const allintem = document.querySelectorAll('.item-liste');
const liste = document.querySelector('ul');
const enfant = document.querySelector('li');
const i2 = document.querySelector('.i2');
const parent = document.querySelector('.parent')


premierTitre.innerText = 'je suis le premier titre'; //intéger un élement texte

premierTitre.style.background = 'red';

parent.innerHTML = '<h1>En texte je rajoute un h1</h1>'; //inséret transform en élément html  

let nvEl = document.createElement('li'); //créer un nouveau élément
nvEl.innerText = "Nouvel item !";
liste.appendChild(nvEl); //rajoute enfant
console.log(premierTitre);