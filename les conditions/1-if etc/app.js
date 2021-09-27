const nb = 50;

if (nb > 20) { //si nb est supérieur à 20 ca retourne true
    console.log("condition 1 vérifié");
} else {
    console.log("condition 1 non vérifié");
}


const nb2 = 40;
const nb3 = 40;
//égalité == signifi égalité simple si on prent un nombre et un string on retourne true
if (nb2 === nb3) { //si nb2 est stritement égal à nb3 ca retourne true
    console.log("condition 2 vérifié");
} else {
    console.log("condition 2 non vérifié");
}


const nb4 = "40";
const nb5 = 40;
const nb6 = "40";
if (nb4 !== nb5) { //si nb4 est strictement différent de nb5 ca retourne true
    console.log("condition 3 vérifié");
} else {
    console.log("condition 3 non vérifié");
}

if (nb5 != nb6) {
    console.log("condition 4 vérifié");
} else {
    console.log("condition 4 non vérifié");
}