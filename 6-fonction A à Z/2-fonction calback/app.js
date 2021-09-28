const tab = [1, 2, 3, 4, 5, 6];

tab.forEach(item => {
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