//fonction pur qui  raporter toujours la même chose si on lui passe le m^me paramétre
//et n'a aucun action sur son enviironement

let x = 2;

const add1 = y => x += y; //ce n'est pas un fonstion pure, car elle modiifiie la variiable x qui est en dores d'elle
// et ell modifie let x
console.log(`${x} fontion non pures`);
add1(4);
console.log(`${x} fontion non pures`);
add1(4);
console.log(`${x} fontion non pures`);
add1(4);
console.log(`${x} fontion non pures`);
add1(4);
console.log(`${x} fontion non pures`);
add1(4);
console.log(`${x} fontion non pures`);


const add2 = (a, b) => a + b; //rien n'est toucher en dehor de cette fonction
// donc c'est une fonction pure

console.log(`${add2(5, 5)} fonction pures`);
console.log(`${add2(5, 5)} fonction pures`);
console.log(`${add2(5, 5)} fonction pures`);