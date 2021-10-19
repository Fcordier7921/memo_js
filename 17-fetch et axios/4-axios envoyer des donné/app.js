const url = 'https://lesoublisdelinfo.com/api.php';


const axionsInstrce = axios.create({
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
            //'Content-Type': 'application/json' pas besoin de 
    },
    baseURL: 'https://lesoublisdelinfo.com/'
})
axionsInstrce.post('api.php', new URLSearchParams({
        prenom: 'steve'
    }))
    .then(function(donnes) {
        console.log(donnes.data);
    })
    .catch(function(erreur) {
        alert('un probléme est survenue, veuiller resseayer plustard')
    })