const liste = document.querySelector('.liste');
const btn = document.querySelector('.btn')
const xhr = new XMLHttpRequest();

btn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts') //fetch en premier argumetnl'url de l'api qui retoune un promesse
        .then(reponse => reponse.json()) //on utilise json retour une promesse des donné
        .then(data => { //on retrouve nos donné
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