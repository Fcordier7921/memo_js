const form = document.querySelector('form');
const inp = document.querySelector('input');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('submit');
    console.log(inp.value);
});