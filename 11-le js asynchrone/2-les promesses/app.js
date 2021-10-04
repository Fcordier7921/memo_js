const promise1 = new Promise((resolve, reject) => { //
    console.log('helle sdfds sd');
    resolve('les donné son arrivé') //si c'est bon
        // reject('les donné ne son pasarrivé')//si c'est pas bon
})
promise1.then((value) => { //si j'ai un promesse bonne alor j'excute ce code
    console.log(value);
}).catch(() => { // en cas d'érreur
    console.log('il  y aune erreur');
})

console.log(promise1);