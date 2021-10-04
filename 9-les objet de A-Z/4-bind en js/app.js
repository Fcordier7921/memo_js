const voiture = {
    couleur: 'noire',
    marque: 'peugeot',
    annee: 2007,
    myFunction: function() {
        console.log(this.annee);
    }
}

let nvFunction = voiture.myFunction.bind(voiture); //lier la fonction avec l'objet pour que this fasse applellle a conteste qe la fonction

nvFunction();
console.log(nvFunction);

const btn = document.querySelector('button');
btn.addEventListener('click', voiture.myFunction.bind(voiture));