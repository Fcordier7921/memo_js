//vue d'enssemble des promesse 

const prommesse1 = new Promise((resolve, reject) => {
        // resolve('les donnés sont là!')
        reject('erreur');
    })
    .then((valeur) => {
        console.log(valeur);
    })
    .catch(() => {
        console.log("erreur");
    })