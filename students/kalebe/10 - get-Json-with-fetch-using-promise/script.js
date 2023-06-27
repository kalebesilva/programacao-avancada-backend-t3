let myList = document.querySelector(".myList");

let myObjVector = new Array();


fetch("https://jsonplaceholder.typicode.com/users")
    .then((theResponse) => theResponse.json())
    .then((data) => JSON.parse(data)).then((data)=> console.log(data.name))


