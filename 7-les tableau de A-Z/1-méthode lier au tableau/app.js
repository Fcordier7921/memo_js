const tableau = ['a', 'b', 'c', 'd'];

tableau.push('z'); //rajouter un élément a la fin du tableau
console.log(`push :`, tableau);
tableau.pop(); //retire le dernier éléement d'un tableau
console.log(`pop :`, tableau);
tableau.shift(); //va enlever le prenier élement d"un tableau
console.log(`shift :`, tableau);
tableau.unshift('a', 'z'); //rajoute des élement au début
console.log(`unshift :`, tableau);
console.log(`lastIndexOf :`, tableau.lastIndexOf('z')); //donne l'index du tableau