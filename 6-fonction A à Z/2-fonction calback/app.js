const tab = [1, 2, 3, "tutu"];

tab.forEach(item => { //item et la valeur du tableau, forEach veux dire pour chaque élément du tableau 
    console.log(item);
})


function customForEach(arr, callback) {

    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);

    }
}
customForEach(tab, (item) => {
    console.log(item);
})