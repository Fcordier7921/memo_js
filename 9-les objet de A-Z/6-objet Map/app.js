//permet de stopqué sous fome de cléer valmeur
let nomMap = new Map([
    ['prenom', 'marck'],
    ['nom', 'Zuckerberg'],
]);
console.log(`ce que donne un objet map: `, nomMap);
nomMap.set('poste', 'PDG de fadebook');
console.log(`ce que donne un objet map aprés qu'on ajoute un élément: `, nomMap);
nomMap.delete('poste');
console.log(`ce que donne un objet map aprés qu'on surpime un élément(poste): `, nomMap);



let utilisateurs = new Map();
utilisateurs.set('Mark Zuckerberg', {
    email: 'mark@facebook.com',
    poste: 'PDG',
});
console.log(`La bonne méthode: `, utilisateurs);

utilisateurs.set('Bill Gates', {
    email: 'bill@gatesnotes.com',
    poste: 'Sauver le monde',
});
console.log(`La bonne méthode rajoue d'un autre utilisateur: `, utilisateurs);

// utilisateurs.delete('Bill Gates');

console.log(utilisateurs);