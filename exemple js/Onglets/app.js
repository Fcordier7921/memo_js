const onglets = Array.from(document.querySelectorAll('.ongnles'));
const contenu = Array.from(document.querySelectorAll('.contenu'));

onglets.forEach(onglet => {

    onglet.addEventListener('click', (e) => {
        for (let i = 0; i < onglets.length; i++) {

            if (onglets[i] === e.target) {

                onglets[i].classList.add('active-onglets');
            } else {
                onglets[i].classList.remove('active-onglets');
            }
        }
        console.log(onglets.indexOf(e.target));

        for (let i = 0; i < contenu.length; i++) {

            if (i === onglets.indexOf(e.target)) {

                contenu[i].classList.add('active-contenu');
            } else {
                contenu[i].classList.remove('active-contenu');
            }
        }
    })
})