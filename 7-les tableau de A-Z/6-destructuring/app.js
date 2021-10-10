let informations = ['superSayen', '25', 'homme'];

// Sans décomposition si j'utilise cette méthode je dois passe par des variable
// let pseudo = informations[0];
// let age    = informations[1];
// let sexe   = informations[2];

// Avec décomposition les variable qui sont entre croché coresponde au valeur du tableau dans la même orde
let [pseudo, age, sexe] = informations;

console.log(pseudo);
console.log(age);
console.log(sexe);