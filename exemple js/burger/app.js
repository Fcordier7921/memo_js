const liste = document.querySelector('.liste');
const btnResponcive = document.querySelector('.btn-responsive');

btnResponcive.addEventListener('click', () => {
    liste.classList.toggle('show')
})
window.addEventListener('resize', () => {
    if (window.innerWidth > 650) {

        liste.classList.remove('show')
    }
})