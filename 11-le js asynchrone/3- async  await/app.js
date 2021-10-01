async function foo() {
    return 999;
}

foo().then(console.log);

async function foo2() {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Action éfeectuer!'), 10000);
    });
    let resultat = await p1;
    console.log(resultat);
}

foo2();