//spread
const nb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const str = "abcde";

console.log(...nb);
console.log(...str);

//destruturing

const pays = {
    nom: 'norvége',
    pop: 52
}

const { nom, pop } = pays; //destruturing l'objet pour lui extraire ces valeur
console.log(nom, pop);

const tab = [5, 10];

const [x, y] = tab; //idem pour le tableau
console.log(x + y);