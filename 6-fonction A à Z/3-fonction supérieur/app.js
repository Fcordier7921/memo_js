/*les fonction d'odre supérieur ce sont de fonction qui vons prende 
//un fonction en paramére ou retouné une fonction
elle permet de regroupe des action dans une fonstion
*/
const notSortedArr = [1, 5, 66, 7478, 12, 558, 511, 4, 5, 21, 1, 45, 25, 1, 454];

const newArray = [];

for (let i = 0; i < notSortedArr.length; i++) {

    if (notSortedArr[i] >= 5) {
        newArray.push(notSortedArr[i]);
    }

}
console.log(newArray);

//créer notre fontion d'orre supérieur pour factorisé ce code

function supCinq(arr, fn) {
    const newArray2 = [];

    for (let i = 0; i < arr.length; i++) {

        if (fn(arr[i]) >= 5) {
            newArray2.push(arr[i]);
        }

    }
    return newArray2;
}
const Arrey1 = supCinq(notSortedArr, (item) => {
    if (item >= 5) {
        return item;
    }
})

const Arrey2 = supCinq(notSortedArr, (item) => {
    if (item >= 50) {
        return item;
    }
})
console.log(Arrey1);
console.log(Arrey2);