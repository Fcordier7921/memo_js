//idéme due set mais ne peut contenir que des objet
let voitureA = {
    constructeur: 'Tesla',
    modele: 'Cybertruck'
}
let voitureB = {
    constructeur: 'Renault',
    modele: 'Espace'
}

let voitures = new WeakSet([voitureA, voitureB]);
console.log(voitures);
//on peut suprimer => voitures.delete(voitureA);