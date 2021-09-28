let couluer = "greene";

switch (couluer) { // on teste la valeur de couluer idem que le if
    case 'orange':
        console.log("prix 21.88$");
        break;
    case 'noir':
        console.log("prix 22.88$");
        break;
    case 'blue':
        console.log("prix 23.88$");
        break;
    case 'vert':
        console.log("prix 27.88$");
        break;
    case 'orajaunenge':
        console.log("prix 25.88$");
        break;
    default: //le cas par defaut
        console.log(`Désoler, nous n'avons pas de ${couluer} en stock;`);


}