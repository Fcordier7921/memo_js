const url = 'https://blockchain.info/ticker';
//créer un requéte

function recupérerPrix() {
    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json'; //attend du json
    requete.send();

    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                let prixEuro = reponse.EUR.last;
                document.querySelector('#price_label').textContent = prixEuro;
            } else {
                alert("un probléme est survenu. revener plus tard ")
            }
        }
    }
    console.log('prix actualiser');
}

setInterval(recupérerPrix, 5000);