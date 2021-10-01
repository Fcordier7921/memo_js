// const voiture = {
//     marque: 'ford',
//     annee: 2009,
//     couleur: 'blanche',
//     rouler() {
//         console.log('Vroom');
//         console.log(this.annee);
//     }
// }


class Voiture {
    constructor(marque, annee) {
        this.marque = marque;
        this.annee = annee;
    }
}
const voituer1 = new Voiture('ford', 2009);
const voituer2 = new Voiture('peugot', 2011);
const voituer3 = new Voiture('seat', 2009);
console.log(voituer1, voituer2, voituer3);