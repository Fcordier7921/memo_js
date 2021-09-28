// les chaine de caractére

let str = "hello \"word\""; //antislate pour les quillment simple ou double
let str2 = "by word";
//anciene métode
str3 = str + str2;
str4 = str + 6; //le nombre deviens une cghaine de caratére dons on ne peut plus faire d'opération
str5 = "une ligne\n" + "une seconde ligne\n";
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);

//nouvelle élo

let str6 = `àbc ${str}
a
a
a`; //`` et ajout d'un expression

let str9 = "fgfdgdgdf " + str + " dgfg";
console.log(str6);
console.log(str9);

let str7 = `je vous dit : ${str}
et aussi d'ou: ${str2}`;
console.log(str7);