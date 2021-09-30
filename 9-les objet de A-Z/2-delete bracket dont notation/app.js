const kitty = {
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
console.log(kitty.couleur);
console.log(kitty['couleur']);

delete kitty.poids;
console.log(kitty.poids);
console.log(kitty.nvObj.nvnvObj.pp);