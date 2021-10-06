//les variables
let prenom = "enzo";
let nom; // undefined ne peut pas faiire la même chose pour un const, il faut définire un variable const
const prenom2 = "lulu";
// const nomPosteFemelle; //kamelkaase 
//-----------------------------------------------
// les types de variable que l'on peut mettre en js

//string
let prenom3 = "lulu"; // on peut mettre '' ou "" ou ``	

//number
let age = 25; // on peut mettre un nombre a virgule 85.52 ou encore des chiffre négatif

//boolean

let choiix = false; // vrai ou faux

//Undefiined
let ville; //le valeur n'est pas définie on peut pas faire ca ave un const

//null

//object
const myObj = { //on déclare les objet avec leur va leur a l'intrérieur
    couleur: "blue",
    prix: 105621,
    porte: 4,
    type: 'monospace'
};

//Symbol

// // trtansformet un chaine de caratére en chiffre

let nub = parseInt('45'); //pour des entier
console.log(`${nub} est un ${typeof nub}`);

let nub2 = parseFloat('45.5325'); //pour des nombre avirgule
console.log(`${nub2} est un ${typeof nub2}`);


//convertire en chaine de caractére

let nunerFree = 45;
let tutu = nunerFree.toString();
console.log(`${tutu} est un ${typeof tutu}`);