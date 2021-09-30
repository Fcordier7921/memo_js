const tableau = ['a', 'b', 'c', 'd'];
const tableau2 = ['z', 'x', 'y'];
const tableau3 = tableau.concat(tableau2);

console.log(tableau3);

console.log(tableau3.includes('d'));
console.log(tableau3.includes('w'));

const multitab = [1, 2, 3, 4, 5, [1, 2, [3]]];
console.log(multitab.flat());
console.log(multitab.flat(2));

const fruit = ['fraise', 'pomme', 'pêche'];
console.log(fruit.join());
console.log(fruit.join(''));
console.log(fruit.join(' '));
console.log(fruit.join('-'));

console.log(fruit.reverse());