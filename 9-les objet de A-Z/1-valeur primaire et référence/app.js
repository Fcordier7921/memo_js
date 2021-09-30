/* les valeur primitives = string number boolean 
undefined null

les valeurs de reference : objet et tableau*/

//Avec des valeur primitive

let a = "abc";
let b = a;
console.log(a, b);

a = "zzz";
a = "rr";
console.log(a, b);

//avec des objet

let obj1 = { str: "abc" };
let obj2 = obj1;
console.log(obj1, obj2);

obj1.str = "zzzzzzz"
console.log(obj1, obj2);

//avec le tableau

let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(arr1, arr2);

arr1.push(4500);
console.log(arr1, arr2);