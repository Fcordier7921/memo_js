console.log('le regex :');
const str = 'Lorem ipsum dolor sit amet. Tutu 165165165';

const regex = /[a]/;
const regex2 = /[aoe]/;
const regex3 = /[aoe]/g;
const regex4 = /[a-z]/g;
const regex5 = /[^a-z]/g;
const regex6 = /[A-Z]/g;
const regex7 = /[A-Z]/gi;
const regex8 = /[0-9]/gi;
const regex9 = /\s/gi;
const regex10 = /\S/gi;
const regex11 = /\w/gi; //idem [a-zA-Z0-9_]
const regex12 = /[0-9\s]/gi;

console.log(str.match(regex));
console.log(str.match(regex2));
console.log(str.match(regex3));
console.log(str.match(regex4));
console.log(str.match(regex5));
console.log(str.match(regex7));
console.log(str.match(regex8));
console.log(str.match(regex9));
console.log(str.match(regex10));
console.log(str.match(regex11));
console.log(str.match(regex12));