console.log('les métode lier au chaine de caractére :');
const str = 'Lorem ipsum dolor sit amet.'

console.log(`${str.charAt(4)} <= resulta de charAt pour 4`); //recupérter la caractére a un index donné

console.log(`${str.includes('ipsum')} <= resulta de includes pour ipsum`); //si le mot et contenu dans la phrase

console.log(`${str.indexOf('ipsum')} <= resulta de indexOf pour ipsum`); //indique l'indexe de ipsum ou de o pour la premiére fois 
console.log(`${str.indexOf('o')} <= resulta de indexOf pour o`);

console.log(`${str.charCodeAt(0)} <= resulta de charCodeAt pour 0`); //donne le unicode du caratére a l'index noté dasn la paramétre

console.log(`${str.slice(15)} <= resulta de slice pour 15`); //couper la chaine a partire d'un index en partant du début, si on met un chiffre négatif ce sera en partent de la fin
console.log(`${str.slice(-15)} <= resulta de slice pour -15`);

const strToArrey = str.split(); //transforme un chaine de caratére en tableau, si on met avec les'' on aurra chaque lettre sera un élément du tableau, si on met ' ' c'est avec chaque mot
const strToArrey2 = str.split('');
const strToArrey3 = str.split(' ');
console.log(`avec splice =>`, strToArrey, strToArrey2, strToArrey3);

const strToArreyJoin = str.split().join(); //join join les tableau en chaine de caratére
const strToArreyJoin2 = str.split('').join();
const strToArreyJoin3 = str.split(' ').join();
console.log(strToArreyJoin, `<=argument vide /`, strToArreyJoin2, `<= argument avec''/`, strToArreyJoin3, `<= argument avec ' ' `);

const str1 = 'hello';
const str2 = 'word';
console.log(`${str1.concat(' ', str2)} <= resulta de concat pour (' ', str2) `); //a jouter deux chaone de caratére