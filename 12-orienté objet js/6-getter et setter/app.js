class Voiture {
    constructor(marque, annee, option) {
        this.marque = marque;
        this.annee = annee;
        this.option = option;
    }
    rajoutOption(nomOption) {
        this.option++;
        console.log(`Rajout de l'option  ${nomOption}, nombre d'option: ${this.option}`);
        return this; //on retour kle context pour uriliqer une chaine de méthode
    }
    dateSortie() { //créer une métode 
        console.log(`Date de sortie de cette voiture ${this.annee}`);
    }
    get marqueD() {
            return `la marque de cet voiture et: ${this.marque}`
        } //il va agir comme si c'éttai une propriété et récupére la propriété

    //muttateur permet de définfir un propriété et de la modifier
    set marqueDSet(valeur) {
        [this.marque, this.annee] = valeur.split(' '); //splite transforme un chaine de 
    }

}
const voituer1 = new Voiture('ford', 2009, 0);
const voituer2 = new Voiture('peugot', 2011, 5);
const voituer3 = new Voiture('seat', 2020, 6);
console.log(voituer1, voituer2, voituer3);
console.log(voituer1.marqueD);
voituer2.marqueDSet = "ferrari 2005";
console.log(voituer2);