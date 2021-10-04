/* les valeur primitives = string number boolean 
undefined null

les valeurs de reference : objet et tableau*/

//Avec des valeur primitive

let a = "abc";
let b = a;
console.log(`valeur primitive =>`, a, b);

a = "zzz";
a = "rr";
console.log(`valeur primitive aprés avoir donner un nouvelle valeur a a =>`, a, b);
// b ne change pas même si on donne une nouvelle valeur a a

//avec des objet

let obj1 = { str: "abc" };
let obj2 = obj1;
console.log(`valeur référence =>`, obj1, obj2);

obj1.str = "zzzzzzz"
console.log(`valeur référence aprés avoir donner un nouvelle valeur a a =>`, obj1, obj2);

//avec le tableau

let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(`valeur référence =>`, arr1, arr2);

arr1.push(4500);
console.log(`valeur référence aprés avoir donner un nouvelle valeur a a =>`, arr1, arr2);