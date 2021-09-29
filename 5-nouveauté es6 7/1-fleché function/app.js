//les fonction fléché doiivent étre déclaré dans un variable
const myObj = {
    a: 5,
    functionnne: function() { //dans un fonction normal this fais référence a l'objet
        console.log(this);
    },
    fuctineFleche: () => { //la fonctiion fléché le this fais référence a wiindows
        console.log(this);
    }

}
const bar = () => {
    return 3;
}
console.log(bar());
const bar2 = () => 15; //maniére racourci quand on a une seuf ligne
console.log(bar2());
const bar3 = a => a; //maniére raoucien avec un paramétre dans la fonction
console.log(bar3(5));

myObj.functionnne();
myObj.fuctineFleche();

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    console.log("hollo");
})