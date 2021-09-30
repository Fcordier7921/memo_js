const tableau = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

tableau.splice(0, 2);
console.log(tableau);
tableau.splice(5, 0, 'z');
console.log(tableau);
console.log(tableau.slice(2, 4));