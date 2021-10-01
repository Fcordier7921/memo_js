const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

xhr.responseType = 'json';
xhr.onload = function() {
    console.log(xhr.response);
    // console.log(JSON.parse(xhr.response));

}

xhr.send();