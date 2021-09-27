const nb = 1500;
if (nb === 100) {
    console.log("NB est égale a 100");
} else if (nb > 500) { //else if si non si nb > 500
    console.log("NB est supérieur a 500"); //lit les condition dans l'ordre et s'arratte dé que une condition et remplie
} else if (nb > 1000) { //else if si non si nb > 1000
    console.log("NB est supérieur a 1000");
} else {
    console.log("NB n'est pas compris dans ces condition");
}
//si un else if et vérifier on ne passe pas a le suite de condition