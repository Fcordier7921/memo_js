class Pays { //moule a créer des objet
    constructor(pop, nom, pib) {
        this.pop = pop;
        this.nom = nom;
        this.pib = pib
    }

    showPop() { //méthode associer a notre objet
        console.log(this.pop);
    }
}
const france = new Pays(70, 'France', 2000); //création de l'objet
const Australie = new Pays(35, 'Australie', 5000);

console.log(france, Australie, france.showPop());