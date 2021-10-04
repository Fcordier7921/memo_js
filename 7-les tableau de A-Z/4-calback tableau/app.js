function usiingCallback(callback) {
    callback();
}
usiingCallback(function() {
        console.log("hello word de a la callback");
    }) //exemple de calback un fonction qui a pour argument un autre fonction

const numtab = [1, 2, 3, 4];
//forEach pour chaque élement du tableau, a un argument qui représente chaque élément du tableau`(on l'apelle la valeur courant)
numtab.forEach(function(el) {
        console.log(`forEach :`, el);
    })
    //map elle va éfectue un action pour chaque élément du tableau et retour un nouveaun tableau
const resultMap = numtab.map(function(x) {
        return x * 2;
    })
    /*métode fléché
        const resultMap = numtab.map(x => x * 2)
        */
console.log(`map :`, resultMap);

//filter permet de filter un tableau et retourne un nouveazu tableau ne pas oublier le return

const fruits = ['Pomme', 'Péche', 'Fraise'];

const resultFilter = fruits.filter(function(fruit) {
        return fruit.length > 5;
    })
    /*métode fléché
    const resultFilter = fruits.filter(fruit => fruit.length > 5)
    */
console.log(`filter :`, resultFilter);

//reduce permet de réduire, prend des argument. Lepremier est l'acumulateur et le second l'item du tableau, donc l'acumulateur de base set a 0 sauf si on lui met un valeur aprés le chevron. est dans la fonction on fais les op sur ces valeur

const numtab2 = [1, 2, 3, 4];

const reduced = numtab2.reduce(function(a, b) {
    return a + b;
}, 10)
console.log(`reduce :`, reduced);