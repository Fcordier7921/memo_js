//la fonction ce rapelle elle même jusqu'a un résulta donné
// donne le même résulta qu'un boucle while

function recursion(num) {

    num++;
    if (num > 10) {
        console.log(`C'est bon! ${num}`);
    } else {
        recursion(num);
        console.log(num);
    }
}

recursion(5);

//faire attention a ne pa faure de boucle infini