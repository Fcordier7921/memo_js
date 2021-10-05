// class Voiture {
//     constructor(marque, annee, option) {
//         this.marque = marque;
//         this.annee = annee;
//         this.option = option;
//     }
//     rajoutOption(nomOption) {
//         this.option++;
//         console.log(`Rajout de ${nomOption}, nombre d'option: ${this.option}`);
//         return this;
//     }
//     dateSortie() {
//         console.log(`Date de sortei de catte voiture ${this.annee}`);
//     }
// }

// class moto extends Voiture {
//     assurance() {
//         console.log("vous avez pris une assurance");
//     }
// }
// const moto1 = new moto('susuki', 2012, 'vert');
// moto1.assurance();
// console.log(moto1);

// console.log({ a: 'a' }.hasOwnProperty('a'));
// console.log([1, 2, 3].pop());

function Personage(nom, taille) {
    this.nom = nom;
    this.taille = taille;
    // this.avancer = function() {
    //     console.log(`${this.nom} avance..`);
    // }
}
Personage.prototype.avancer = function() { //pour rajouter dans le prototyp
    console.log(`${this.nom} avance..`); //le this fait toujour appelle aau personage de la fonction
}

const perso1 = new Personage('raspotine', 190);
const perso2 = new Personage('césart', 210);
perso1.avancer();
console.log(perso1, perso2);