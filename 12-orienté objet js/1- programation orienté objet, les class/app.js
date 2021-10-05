// const voiture = {
//     marque: 'ford',
//     annee: 2009,
//     couleur: 'blanche',
//     rouler() {
//         console.log('Vroom');
//         console.log(this.annee);
//     }
// }


class Voiture { //création d'une class un moule a objet
    constructor(marque, annee) { //constructor defini les propriété de son objet
        this.marque = marque;
        this.annee = annee;
    }
}
const voituer1 = new Voiture('ford', 2009);
const voituer2 = new Voiture('peugot', 2011);
const voituer3 = new Voiture('seat', 2020);
console.log(`les objet qui on été créer par une classe: `, voituer1, voituer2, voituer3);


let str = new String('abqgfd'); //créer une nouvelle chaine de caractére
console.log(str);


let nvDate = new Date(); //créer une nouvelle date actuel
console.log(nvDate);

let regex = new RegExp(/abc/, 'g'); //créer un nouveau régex
console.log(regex);