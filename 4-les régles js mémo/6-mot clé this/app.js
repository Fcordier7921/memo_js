const myObj = {
    prenon: "lului",
    presentation() {
        console.log(this.prenon);
    }
}
myObj.presentation();

function foo() {
    console.log(this);
}
foo();

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
})