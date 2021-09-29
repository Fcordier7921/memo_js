//vue d'enssemble des promesse 

const prommesse1 = new Promise((resolve, reject) => {
        // resolve('les donnés sont là!')
        reject('Erreur');
    })
    .then((valeur) => {
        console.log(valeur);
    })
    .catch(() => {
        console.log("erreur les donné ne sont pas là");
    })