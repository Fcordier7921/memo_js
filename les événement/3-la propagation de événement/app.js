const btn = document.querySelector('button');
//en premier nous aurron le bouton qui ce déclance puis le body qui se déclance
//l'écoute d'événement ce produit du haut vres le bas, jusqu'a rencontré l'écoute qui a été déclanché,
//puis remont et déclanche les écoute d'événement identique des parents
btn.addEventListener('click', (e) => {
    console.log('event BUTUN');
    //e.stopImmediatePropagation(); stop la propagation de l'événement
}); //on rajoute le trosiéme paramétre true pour faire remnter  la propagation

document.body.addEventListener('click', () => {
    console.log('event body');
});