// EXERCICE 6 : Les évènements.
let circul = document.querySelector('.cercle');
let carre = document.querySelector('.carre');

// 1. Changez la couleur du cercle en "crimson" quand votre souris le survole.
circul.addEventListener('mouseenter', () => {
    console.log("survolle");
    circul.style.backgroundColor = 'crimson';
});
circul.addEventListener('mouseout', () => {
    console.log("Unsurvolle");
    circul.style.backgroundColor = 'lightgreen';
});

// 2. Changez la couleur du carré en "violet" quand vous cliquez dessus.
carre.addEventListener('click', () => {
    console.log("click");
    carre.style.backgroundColor = 'violet';
});
carre.addEventListener('mouseout', () => {
    console.log("UNclick");
    carre.style.backgroundColor = 'lightblue';
});

// 3. Rajoutez l'évenement "click" au document, puis loggez la position(x,y) des clics que vous effectuez sur le document.

document.addEventListener('click', (event) => {
    console.log(`Pos X:${event.clientX}, Pos X: ${event.clientY}`);
});