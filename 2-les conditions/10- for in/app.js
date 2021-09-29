//idem que for of mai pour les objet
const tesla = {
    marque: 'Tesla',
    modele: 'Model S',
    couleur: 'rouge',
    prix: 100000,
};
for (const prop in tesla) {

    console.log(`${prop}: ${tesla[prop]}`);
} // la const prop et un chaine de caratére qui contient 
//la propriété de l'objet tesla et la valeur de la propriété 
//de l'objet tesla