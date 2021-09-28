const titre = document.querySelector("h1");

titre.addEventListener('click', function() {
    console.log("helle\n");
});

titre.addEventListener('mouseenter', tutu);
titre.addEventListener('mouseleave', unTutu);


function tutu() {
    titre.style.color = "blue";
    titre.style.cursor = "pointer";
}

function unTutu() {
    titre.style.color = "black"
}