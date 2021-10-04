console.log('le regex :');
const str = 'Lorem ipsum dolor sit amet. Tutu 165165165';

const regex = /[a]/; //vérifi que s'il y a un A dans la phrase mais s'arréte a la premiére lettre trouvé
const regex2 = /[aoe]/;
const regex3 = /[aoe]/g; // g pour tou prendre en compte
const regex4 = /[a-z]/g; //de a à z
const regex5 = /[^a-z]/g; // ^ inver de la sélection
const regex6 = /[A-Z]/g;
const regex7 = /[A-Z]/gi; //le i veux dire innsensible a la casse Majucoule ou minuscule
const regex8 = /[0-9]/gi;
const regex9 = /\d/gi; //conpte tout les espage
const regex10 = /\s/gi; //conpte tout les espage
const regex11 = /\S/gi; //tout ce que n'est pas un espace
const regex12 = /\w/gi; //idem [a-zA-Z0-9_]
const regex13 = /[0-9\s]/gi; //mélange de regex

console.log(`/[a]/ =>`, str.match(regex));
console.log(`/[aoe]/ =>`, str.match(regex2));
console.log(`/[aoe]/g =>`, str.match(regex3));
console.log(`/[a-z]/g =>`, str.match(regex4));
console.log(`/[^a-z]/g =>`, str.match(regex5));
console.log(`/[A-Z]/g =>`, str.match(regex6));
console.log(`/[A-Z]/gi =>`, str.match(regex7));
console.log(`[0-9]/gi =>`, str.match(regex8));
console.log(`/\d/gi =>`, str.match(regex9));
console.log(`/\s/gi =>`, str.match(regex10));
console.log(`/\S/gi =>`, str.match(regex11));
console.log(`/\w/gi =>`, str.match(regex12));
console.log(`/[0-9\s]/gi =>`, str.match(regex13));