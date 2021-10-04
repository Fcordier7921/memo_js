//setTomeout
const timeOout = setTimeout(presentation, 2000); // fait la fonction au bout de 2seconde 


// clearTimeout(timeOout);//suprimer le settimeout

function presentation() {
    console.log("hello word");
}



setTimeout(function() { //
    console.log("hello word2");
}, 2000);

console.log('cwvx,knbxwclvb');

// clearTimeout(timeOout);


//setinterval


let compteur = 0;
setInterval(function inter() { // se répéte
    compteur++;
    console.log(compteur);

}, 1000);
// clearInterval(inter);