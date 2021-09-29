//itérer a traver des objet itérable (array, string, map, set, arguments, nodeList)

const tab1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const string = "je suis un con et je m'apelle danny";

for (const element of tab1) {
    console.log(element);
} // permet de parcourir un tableau ou un objet itérable

for (const element3 of string) {
    console.log(element3);
}