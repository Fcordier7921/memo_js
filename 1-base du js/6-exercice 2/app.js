// EXERCICE 2 : Les opérateurs, chaînes & fonctions.


// Écrivez une fonction qui retourne un nombre multiplié par deux en utilisant un paramètre.

function multiplieParDeux(number) {

    return number * 2;
}
console.log(multiplieParDeux(4));





//  Déterminez ce qui est vrai ou faux.

let solde = 150000;
solde += 50000;
// Ce code permet d'assigner la valeur 50 000 à solde.
// Vrai ou Faux ?
//vrai
console.log(solde);
let resultat = 10 % 7;
// resultat est égal à 5.
// Vrai ou Faux ?
//Faux
console.log(resultat);
let nbPneus = 4;
let str = `J'ai besoin de $(nbPneus) pour ma voiture.`
    // C'est la bonne façon d'intégrer une expression dans une chaîne.
    // Vrai ou Faux ?
    //Faux
let str2 = `J'ai besoin de ${nbPneus} pour ma voiture.`
console.log(str2);