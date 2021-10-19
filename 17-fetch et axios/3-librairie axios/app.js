const url = 'https://blockchain.info/ticker';

async function recupererPrix() {

    // const requete = await fetch(url, {
    //     method: 'GET'
    // });
    // if (!requete.ok) {
    //     alert('un probléme est survenu. Veuiller ressayer plutard')
    // } else {
    //     let donnes = await requete.json();
    //     // console.log(donnes);
    //     document.querySelector('span').textContent = donnes.EUR.last;
    // }
    axios.get(url)
        .then(function(donnes) {
            // console.log(donnes);
            document.querySelector('span').textContent = donnes.data.EUR.last;
        })
        .catch(function(erreur) {
            alert('un probléme est survenue, veuiller resseayer plustard')
        })
        .then(function() {
            console.log('Mise a jour effectuer');
        })

}

setInterval(recupererPrix, 1000);