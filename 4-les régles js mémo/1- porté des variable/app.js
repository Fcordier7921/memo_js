let foo = "abc"; // variable globale de partout

console.log(foo);

function tutu() {
    console.log(foo);
}
tutu();
if (true) {
    console.log(foo);
}

//variable dans une fonction l'accé reste dans la fontion
function faa() {
    let bar = 3;
    console.log(bar);
    if (true) {
        if (true) {
            var lorem = " lorem"; // les var son funtion scopp on y  a accé dans tout la fonction ou tout les bloc
            let reg = " reg"; // les let et const son accésible juste dans le block qui les contien
            console.log(reg);
        }
    }
    console.log(lorem);
    console.log(reg);

}
faa();
console.log(bar);