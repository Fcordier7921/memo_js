document.cookie = 'prenom=john'; //créer un cookie

//afficher un cookie
const cok = document.querySelector('.cook');

cok.textContent = "le cookie qui a été créer est : " + document.cookie;

document.cookie = 'prenom=fred'; //pour modifier le cookie

cok.textContent = "le cookie qui a été créer est : " + document.cookie;
document.cookie = 'prenom2=alin; path=/; domaine=f-cordier.fr'; //path pour dire ou le coukie sera utiliser et domaione pour dir ou il sera utiliser

let date = new Date(Date.now() + 3600);
date = date.toUTCString();
document.cookie = 'prenom3=fred; path=/; domaine=f-cordier.fr; expires=' + date; //expires et la date alakelle les cookie expire

document.cookie = 'prenom3=fred; path=/; domaine=f-cordier.fr; max-age= 3600; secure'; //max-age et la duré de validité d'un cookie et secure et que le coukie sera valide que sur le site https