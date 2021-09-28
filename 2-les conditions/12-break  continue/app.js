//break permet de sortir d'une boucle

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; // sort de la boucle quand on arrive a 5
    }
    console.log(i);
}

//continue permet de passer a la suite de la boucle

for (let i = 0; i <= 5; i++) {
    if (i === 3) {
        continue; // sort de la boucle quand on arrive a 5
    }
    console.log(i);
}