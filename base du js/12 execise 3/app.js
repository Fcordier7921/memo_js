// EXERCICE 3 : Tableaux, Objets, évènements...


// Créez un tableau avec trois valeurs à l'intérieur : 5124, true, et un objet qui contient une propriété.

const table = [5124, true, { mon: 'luc', tut: "tutu" }];

// Créez un objet avec trois propriétés

const hutut = {
    nom: "sucub",
    prenon: "meticore",
    age: 152202331
}

// Dans l'HTML, il y a un texte, rentrez cet élement dans une constante,
// puis changez la couleur de son fond au clic en violet(purple/violet);

const titre = document.querySelector("h1");

titre.addEventListener('click', function() {
    titre.style.backgroundColor = "violet";
})