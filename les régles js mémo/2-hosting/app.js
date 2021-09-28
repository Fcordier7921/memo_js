// pour les variable et les fonction 

/*pour les variable elle son remonté en début de conde lors de la compilation
sans leur valeur , leur valeur reste au niveau de la déclaration. 
c'est pour cela qu'il ne faut pas utiliser un varibla avant de l'avoir déclarer
*/
console.log(tutu);

let tutu = 15;
/*cela nous retourne: Uncaught ReferenceError: Cannot access 'tutu' before initialization
un erreur
*/

/*pour les fonction elle peuve être déclaré comme on veux mais par 
convention on les déclare en premier avant de la utiliser  */