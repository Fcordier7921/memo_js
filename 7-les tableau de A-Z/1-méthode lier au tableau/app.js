const tableau = ['a', 'b', 'c', 'd'];

tableau.push('z');
console.log(tableau);
tableau.pop();
console.log(tableau);
tableau.shift();
console.log(tableau);
tableau.unshift('a', 'z');
console.log(tableau);
console.log(tableau.lastIndexOf('z'));