const tableau = ['a', 'b', 'c', 'd'];
const tableau2 = ['z', 'x', 'y'];
const tableau3 = tableau.concat(tableau2); //assembler deux tableaux
//dans un const on ne peut pas assigne un nouvelle valeur, mais on peux modifier les ce que contien le tableau

console.log(`concat:`, tableau3);

console.log(`includes:`, tableau3.includes('d')); //includes et pour savoire si un tableau passéde la valeur par ex d
console.log(`includes:`, tableau3.includes('w'));

const multitab = [1, 2, 3, 4, 5, [1, 2, [3]]];
console.log(`flat:`, multitab.flat()); //flat regroupe le premier tableau dans la tableau, l'argument 
console.log(`flat:`, multitab.flat(2));

const fruit = ['fraise', 'pomme', 'pêche'];
console.log(fruit.join()); //join transforme en chaine de caratére, dans l'argument on choise la séparation entre les élément
console.log(`join:`, fruit.join(''));
console.log(`join:`, fruit.join(' '));
console.log(`join:`, fruit.join('-'));

console.log(`reverse:`, fruit.reverse()); // reverce inver le sensse d'un tableau