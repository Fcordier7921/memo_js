//sread
const nb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const str = "abcde";

console.log(...nb);
console.log(...str);

const pays = {
    nom: 'norvége',
    pop: 52
}



//destruturing
const { nom, pop } = pays;
console.log(nom, pop);

const tab = ['a', 'b'];

const [x, y] = tab;
console.log(x, y);