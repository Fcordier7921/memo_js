//idem pour le weakset mais le weakmap fonctione avec klé(ojet) valeur(ojet)
let voitures = new WeakMap();

let index = {
    id: 1
}

let voitureA = {
    constructeur: 'Tesla',
    modele: 'Cybertruck'
}

voitures.set(index, voitureA);

// voitures.delete(index);//pour suprimer
console.log(voitures);