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
    constructor(marque, annee, option) {
        this.marque = marque;
        this.annee = annee;
        this.option = option;
    }
    rajoutOption(nomOption) {
        this.option++;
        console.log(`Rajout de ${nomOption}, nombre d'option: ${this.option}`);
        return this;
    }
    dateSortie() {
        console.log(`Date de sortei de catte voiture ${this.annee}`);
    }
}
const voituer1 = new Voiture('ford', 2009, 0);
const voituer2 = new Voiture('peugot', 2011, 5);
const voituer3 = new Voiture('seat', 2020, 6);
console.log(voituer1, voituer2, voituer3);

voituer1.dateSortie()
voituer2.dateSortie()
voituer3.dateSortie()

console.log(voituer1);
voituer1
    .rajoutOption('2 porte')
    .rajoutOption('tutu')
    .rajoutOption('bubu')