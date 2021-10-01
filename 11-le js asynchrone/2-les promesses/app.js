const promise1 = new Promise((resolve, reject) => {
    console.log('hellesdfds sd');
    resolve('les donné sonarrivé')
        // reject('les donné ne son pasarrivé')
})
promise1.then((value) => {
    console.log(value);
}).catch(() => {
    console.log('il  y aune erreur');
})

console.log(promise1);