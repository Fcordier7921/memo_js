//l'importance de l'orde du code
let nb = 12;
console.log(nb); //si l'on inverce le console log avec la variable, 
//il va nous mettre un erreur que la variable n'est pas initiialisé


console.log(multiplie(10)); //ce n'est pas le cas pour les fonction

function multiplie(number) {

    return number * 2;
}