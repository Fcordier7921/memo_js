const liste = document.querySelector('.liste');
const btn = document.querySelector('.btn')
const xhr = new XMLHttpRequest();

btn.addEventListener('click', () => {

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

    xhr.responseType = 'json';
    xhr.onload = function() {
        console.log(xhr.response);
        for (let i = 0; i < xhr.response.length; i++) {
            let nexLi = document.createElement('li');
            let newTitreCarte = document.createElement('h2');
            let newBodyCarte = document.createElement('p');
            newTitreCarte.innerText == xhr.response[i].title;
            newBodyCarte.innerText == xhr.response[i].body;
        }

    }

    xhr.send();
})