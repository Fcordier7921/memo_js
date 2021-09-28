//les fonctions

function presentation() { //structure des la fontion de bas
    let non = "coco";
    console.log("helle depuis la fonction de " + non);
}
presentation()

function presentation2() { //fonction qu'on retour une valeur
    let prenon = "tutu";
    return 5 * 5 * 6 * 8 + prenon;
    let tutu = "prénom" // tout ce qui et aprés le return ne compte pas

}

console.log(presentation2());

function presentation3(nb1, nb2) { //fontion avec des paramétre
    return nb1 + nb2;
}
console.log(presentation3(5, 10));

function presentation4(prenon) { //fontion avec des paramétre
    return `Je m'apelle ${prenon}`;
}
console.log(presentation4("luc"));