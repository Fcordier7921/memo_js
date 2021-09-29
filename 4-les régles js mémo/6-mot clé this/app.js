const myObj = {
    prenon: "lului",
    presentation() {
        console.log(this.prenon); //this fait référence a myObj
    }
}
myObj.presentation();

function foo() {
    console.log(this); //this fait appelle a l'objet window
}
foo();

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
})

//this fais référence au context apellent