const url = 'https://lesoublisdelinfo.com/api.php';

async function envoyerPrenom(prenom) {
    const requete = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
                //'Content-Type': 'application/json'
        },
        body: new URLSearchParams({ // si on tutilise application/json on a plus besoinde new URLSearchParams
            prenom: prenom

        })


    })
    if (!requete.ok) {
        alert('un probléme est survenu. Veuiller ressayer plutard')
    } else {
        let donnes = await requete.json();
        console.log(donnes);

    }
}
envoyerPrenom('elon')