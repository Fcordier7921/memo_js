let prenon = "john";
let age = 48;

const myObj = {
    prenon, //si le non de la propriété a la même non que la variable on peu l'écriire comme ca
    age,
    hello() { //dans un objet on peut écrire la m^éthode comme ca
        return 2;
    }
}
console.log(myObj.prenon);
console.log(myObj.hello());

// paramétre par défaut
function fiz(x, y = 25) {
    return x + y;
}

console.log(fiz(20, 10)); //si on met rien comme deuxiéme paramétre le paramétre par défaux et utiiliser
console.log(fiz(20));

//quand on ne sais pas combien d'argument peux recvoir un e fonstion
function baz(...args) {
    console.log(args);

}
baz(1, 2, 3, 4, 5, 6, 7, 8, 9) //tout les argument passé seron miis dans un tableau