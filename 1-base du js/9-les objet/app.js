//les objet
let pays = {
    nom: 'japon',
    pop: 1000000,
    clasement: 3,
    pib: 377915,
    myarr: [1, 2, 3, 4, 5, 6],
    myObjt: {
        propa: 'abc'
    },
    maMethode: function() {
        console.log("hello despuis la méthode");
    }
}
console.log(pays.nom); //utilisation des valeur qui son dans l'objet
console.log(pays.pop);
console.log(pays);
pays.maMethode(); //un fonction dans un objet s'appelle une méhtode
console.log(pays.myarr[1]);