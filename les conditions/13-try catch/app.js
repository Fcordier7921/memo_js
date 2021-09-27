//try catch

try { //try est un bloc d'instructions qui serre a tester si une erreur est survenue
    console.log("début du test");
    fonctioninecistante();
    log("fin du test de l'erreur");

} catch (err) { // catch est un bloc d'instructions qui serre a executer si une erreur est survenue
    console.log(` Erreur  ${err}`);
} finally { //envoyer quoi qu'il arrive
    console.log("on envoie quelque chose aprés le try ou le catch");
}