//acerppte tout type de valeur mais n'accepte pas les doublon
let nombres = [10, 45, 75, 10, 24, 45];
let monSet = new Set(nombres);
console.log(monSet);

let monSet2 = new Set();

monSet2.add('70');
monSet2.add(87);
// monSet2.delete(87);

console.log(monSet2.size);