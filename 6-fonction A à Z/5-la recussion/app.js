//la fonction ce rapelle elle même jusqu'a un résulta donné

function recursion(num) {

    num++;
    if (num > 10) {
        console.log(`C'est bon! ${num}`);
    } else {
        recursion(num);
    }
}

recursion(5);