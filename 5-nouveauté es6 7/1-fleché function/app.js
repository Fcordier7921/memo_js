const myObj = {
    a: 5,
    functionnne: function() {
        console.log(this);
    },
    fuctineFleche: () => {
        console.log(this);
    }

}

myObj.functionnne();
myObj.fuctineFleche();

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    console.log("hollo");
})