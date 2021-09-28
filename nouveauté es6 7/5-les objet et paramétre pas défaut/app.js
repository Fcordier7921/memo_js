let prenon = "john";
let age = 48;

const myObj = {
    prenon,
    age,
    hello() {
        return 2;
    }
}

console.log(myObj.hello());

// paramétre par défaut
function fiz(x, y = 25) {
    return x + y;
}

console.log(fiz(20, 10));
console.log(fiz(20));

//quand on ne sais pas combien d'argument peux recvoir un e fonstion
function baz(...args) {
    console.log(args);

}
baz(1, 2, 3, 4, 5, 6, 7, 8, 9)