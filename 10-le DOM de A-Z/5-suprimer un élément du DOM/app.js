const premierTitre = document.querySelector('.premiertitre');
const seconTitre = document.getElementById('premier-id');
const titreNu = document.querySelector('h3');
const allintem = document.querySelectorAll('.item-liste');
const liste = document.querySelector('ul');
const enfant = document.querySelector('li');
const i2 = document.querySelector('.i2');
const parent = document.querySelector('.parent')

premierTitre.style.background = 'red';

premierTitre.innerText = 'je suis le premier titre';

parent.innerHTML = '<h1>En texte je rajoute un h1</h1>';

let nvEl = document.createElement('li');
nvEl.innerText = "Nouvel item !";
// liste.appendChild(nvEl);
console.log(premierTitre);

liste.children[2].remove(); //suprimer le 3 éléments

// liste.remove();

liste.children[1].replaceWith(nvEl); //remplace ulélément 2