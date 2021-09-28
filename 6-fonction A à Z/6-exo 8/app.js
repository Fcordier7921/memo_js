// EXERCICE 8 : Les fonctions 🔥




// 1. Écrire une fonction pure qui sert à multiplier deux nombres ensemble.

function add(a, b) {
    return a * b
}
console.log(add(5, 9));








// 2. Écrire une fonction d'ordre supérieur, qui prend une fonction callback en paramètre et un tableau rempli de nombres.
//   Cette fonction retournera un nouveau tableau, qui contient toutes les valeurs auxquelles on a ajouté 1

function tabPlus(tab, func) {
    const nexTab = [];
    for (let i = 0; i < tab.length; i++) {
        nexTab.push(func(tab[i]))

    }
    return nexTab;
}

const plusUn = nb => nb + 1;

const tablePushPlus = tabPlus([1, 2, 3], plusUn);
console.log(tablePushPlus);