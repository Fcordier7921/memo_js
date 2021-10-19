const url = 'https://blockchain.info/ticker';

async function recupererPrix() {

    const requete = await fetch(url, {
        method: 'GET'
    });
    if (!requete.ok) {
        alert('un probléme est survenu. Veuiller ressayer plutard')
    } else {
        let donnes = await requete.json();
        // console.log(donnes);
        document.querySelector('span').textContent = donnes.EUR.last;
    }

}

setInterval(recupererPrix, 1000);