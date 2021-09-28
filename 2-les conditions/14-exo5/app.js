// EXERCICE 5 : Boucles, mots clés, déclarations

// 1. Affichez à l'aide d'une boucle "for..in" toutes les valeurs des propriétés de cet objet dans la console.

const capitales = {
    autriche: "Vienne",
    argentine: "Buenos Aires",
    estonie: "Tallinn",
    australie: "Cambera"
}
for (let prop in capitales) {
    console.log(`${capitales[prop]}`);
}
// 2. Idem mais avec une boucle "for..of" et ce tableau.

const fruits = ['Fraise', 'Cerise', 'Orange', 'Citron', 'Ananas'];
for (let fruit of fruits) {
    console.log(fruit);
}

// 3. Créez une fonction qui sert à repérer si un texte qu'on lui passe en argument contient la lettre "z".
// si c'est le cas, la fonction écrit dans la console "Alerte: le texte contient la lettre Z".
function containsZ(text) {
    if (text.includes('z')) {
        console.log('Alerte: le texte contient la lettre Z');
    } else {
        console.log('Le texte ne contient pas la lettre Z');
    }

}
containsZ('a');

function checkZ(txt) {
    for (const lettre of txt) {
        if (lettre === 'z') {
            console.log('Alerte: le texte contient la lettre Z');
        }
    }
}
checkZ('adfsfds');

function containsZ2(text2) {
    for (let i = 0; i < text2.length; i++) {
        if (text2[i] === 'z') {
            console.log('Alerte: le texte contient la lettre Z');
        }
    }
}
containsZ2('adfsfds');