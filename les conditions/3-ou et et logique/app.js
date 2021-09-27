const nb = 555;
if (nb === 100) {
    console.log("NB est égale a 100");
} else if (nb > 500 && nb <= 1000) { //&& les deux condition doivent étre remplis
    console.log("NB est supérieur a 500 et inférieur ou égale a 1000"); //lit les condition dans l'ordre et s'arratte dé que une condition et remplie
} else if (nb > 1000) {
    console.log("NB est supérieur a 1000");
}

if (nb === 100 || nb === 555) { //ou un des deux contion doit être remplie
    console.log("condition vérifier par le ou");
}
const bool = false; // un chire et un valeur comme true ; 0 et undifye et un valeur considéret comme false

if (!bool) { //!bool est égale a false donc la condition est remplie , si bool étai a tru e la condition ne serais pas remplie
    console.log("booléen vérifier le booléen");
}