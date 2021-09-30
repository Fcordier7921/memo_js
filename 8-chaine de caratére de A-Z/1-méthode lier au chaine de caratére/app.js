console.log('les métode lier au chaine de caractére :');
const str = 'Lorem ipsum dolor sit amet.'

console.log(`${str.charAt(4)} <= resulta de charAt pour 4`);

console.log(`${str.includes('ipsum')} <= resulta de includes pour ipsum`);

console.log(`${str.indexOf('ipsum')} <= resulta de indexOf pour ipsum`);
console.log(`${str.indexOf('o')} <= resulta de indexOf pour o`);

console.log(`${str.charCodeAt(0)} <= resulta de charCodeAt pour 0`);

console.log(`${str.slice(15)} <= resulta de slice pour 15`);
console.log(`${str.slice(-15)} <= resulta de slice pour -15`);

const strToArrey = str.split();
const strToArrey2 = str.split('');
const strToArrey3 = str.split(' ');
console.log(strToArrey, strToArrey2, strToArrey3);

const strToArreyJoin = str.split().join();
const strToArreyJoin2 = str.split('').join();
const strToArreyJoin3 = str.split(' ').join();
console.log(`${strToArreyJoin} argument vide / ${strToArreyJoin2} argument avec''/ ${strToArreyJoin3} argument avec ' '`);

const str1 = 'hello';
const str2 = 'word';
console.log(`${str1.concat(' ', str2)} <= resulta de concat pour (' ', str2) `);