const voiture = {
    couleur: 'noire',
    marque: 'peugeot',
    annee: 2007,
    myFunction: function() {
        console.log(this.annee);
    }
}

let nvFunction = voiture.myFunction.bind(voiture);

nvFunction();
console.log(nvFunction);

const btn = document.querySelector('button');
btn.addEventListener('click', voiture.myFunction.bind(voiture));