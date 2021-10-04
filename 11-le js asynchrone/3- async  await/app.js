async function foo() { // async retourne un  promessez qui s'otau résout
    return 999;
}

foo().then(console.log);

async function foo2() {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Action éfeectuer! '), 10000);
    });
    let resultat = await p1; // await attendre la résulta de la promesse
    console.log(resultat);
}

foo2();