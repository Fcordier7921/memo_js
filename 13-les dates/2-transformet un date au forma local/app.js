let datePresqice = new Date();
//tolocalDateString = jour, mois, année
//tolocalTimeString = l'heure
//tolocalString = jour, mois, année, heure
//on choisie le option qu'on veux 
console.log(datePresqice);

//le langage locale de l'utilisateur
console.log(navigator.language);


let dateLocal = datePresqice.toLocaleString(navigator.language, {
    weekday: 'long', //short(3premier lettre), narrow(premiére lettre), long(toutes les lettre)
    yeaer: 'numeric', //numerique(1979), 2-digit(79)
    month: 'long', //short(3premier lettre), narrow(premiére lettre), long(toutes les lettre), numerique(chiffre)
    day: 'numeric', //numerique, 2-digit
    hour: 'numeric', //numerique, 2-digit
    minute: 'numeric', //numerique, 2-digit
    second: 'numeric' //numerique, 2-digit

})
console.log(dateLocal);