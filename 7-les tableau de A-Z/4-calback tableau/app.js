function usiingCallback(callback) {
    callback();
}
usiingCallback(function() {
    console.log("hello word de a la callback");
})

const numtab = [1, 2, 3, 4];
//forEach
numtab.forEach(function(el) {
        console.log(el);
    })
    //map
const resultMap = numtab.map(function(x) {
        return x * 2;
    })
    /*métode fléché
        const resultMap = numtab.map(x => x * 2)
        */
console.log(resultMap);

//filter

const fruits = ['Pomme', 'Péche', 'Fraise'];

const resultFilter = fruits.filter(function(fruit) {
        return fruit.length > 5;
    })
    /*métode fléché
    const resultFilter = fruits.filter(fruit => fruit.length > 5)
    */
console.log(resultFilter);

//reduce

const numtab2 = [1, 2, 3, 4];

const reduced = numtab2.reduce(function(a, b) {
    return a + b;
}, 10)
console.log(reduced);