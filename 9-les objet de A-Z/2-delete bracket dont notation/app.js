const kitty = { //objet kitty convention d'écriture 
    race: 'Siamois',
    poids: 3,
    couleur: 'gris',
    nvObj: {
        abc: "abc",
        zzz: "zzz",
        nvnvObj: {
            uu: 'uu',
            pp: 'ppp',
            tab: [{
                rrr: 'rrr',
                uu: 'ljkfdqg'
            }]
        }
    }
}
console.log(kitty.couleur); //dote notaition
console.log(kitty['couleur']); //braquette notaition 

delete kitty.poids; //suprimer une propriété ca valeur
console.log(`delete d'une valeur de l'objet `, kitty.poids);
console.log(kitty.nvObj.nvnvObj.pp);