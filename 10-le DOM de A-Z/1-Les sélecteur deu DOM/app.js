// les selecteur du DOM

const h1 = document.getElementsByTagName('h1');
console.log(h1); //pour selectionner une bamlise
const premierTitre = document.getElementsByClassName('premiertitre'); //sélection des class c'est un tabealu

console.log(`sélection tout les class premier titre =>`, premierTitre);

const seconTitre = document.getElementById('premier-id'); //selectionner l'éléméne id il rent diréctement l'élément du dom

console.log(`sélection l'id premier id =>`, seconTitre);

const titreNu = document.querySelector('h3'); //sélectionne le premier élement  qu'il soit un class ou un id ou h3 etc..
console.log(`sélection d'un seul élément =>`, titreNu);

const allintem = document.querySelectorAll('.item-liste'); //retourne un tableau

console.log(`sélection de tous éléments =>`, allintem);