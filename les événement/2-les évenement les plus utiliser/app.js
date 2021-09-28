const btn = document.querySelector('button');
const suvole = document.querySelector('.box');
const inp = document.querySelector('input');

btn.addEventListener('click', foo);
//on utilise uniquement addEventListener pour écouter un événement
function foo() {
    console.log('click');
    btn.removeEventListener('click', foo);
}

suvole.addEventListener('mouseenter', () => {
    console.log("survolle");
    suvole.style.backgroundColor = 'blue';
});
suvole.addEventListener('mouseout', () => {
    console.log("fin de survolle");
    suvole.style.backgroundColor = 'crimson';
});
document.addEventListener('keydown', (event) => {
    console.log(event.key);
});
window.addEventListener('load', () => {
    console.log(' tout a bien chargement');
});

inp.addEventListener('input', () => {
    console.log("je suis entrain d'écrire dans l'input");
    console.log(inp.value);
});