const liste = document.querySelector('.liste');
const btn = document.querySelector('.btn')
const xhr = new XMLHttpRequest();

btn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(reponse => reponse.json())
        .then(data => {
            for (i = 0; i < data.length; i++) {

                let nexLi = document.createElement('li');
                let newTitreCarte = document.createElement('h2');
                let newBodyCarte = document.createElement('p');
                newTitreCarte.innerText = data[i].title;
                newBodyCarte.innerText = data[i].body;

                nexLi.appendChild(newTitreCarte);
                nexLi.appendChild(newBodyCarte);
                liste.appendChild(nexLi);

            }

        })
})