const xhr = new XMLHttpRequest(); //xmlhttprequest métohode pour récupére les donnés

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts'); //

xhr.responseType = 'json'; //on dit que la répons est du json
xhr.onload = function() { //quand lon varecevoir les donnés
    console.log(xhr.response);
    // console.log(JSON.parse(xhr.response));

}

xhr.send(); //envoyer la requéte