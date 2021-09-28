// EXERCICE 7 : JavaScript moderne


// 1. Créez une fonction flêchée qui retourne "Hello World", 
//elle doit être écrite dans sa syntaxe la plus courte possible.(élégante)


const tutu = () => "hello word";
console.log(tutu());

// 2. Créez une classe Humain qui sert à créer des objets avec deux 
//propriétés : poids et taille.


class Humain {
    constructor(poids, taille) {
        this.poids = poids;
        this.taille = taille;
    }

}
const mark = new Humain(70, 152);
const lucas = new Humain(35, 155);
console.log(mark, lucas);