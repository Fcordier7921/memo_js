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

class moto extends Voiture {
    assurance() {
        console.log("vous avez pris une assurance");
    }
}
const moto1 = new moto('susuki', 2012, 'vert');
// moto1.assurance();
console.log(moto1);

console.log({ a: 'a' }.hasOwnProperty('a')); //différente fonction qui son dans le proto
console.log([1, 2, 3].pop());