let myList = document.querySelector(".myList");

let myObjVector = new Array();

getData();
async function getData() {
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((theResponse) => theResponse.json())
    .then((data) =>
      data.map((x) => myObjVector.push({ name: x.name, email: x.email }))
    )
    .catch((err) => console.error(err));

  myObjVector.forEach((element) => {
    let liNome = document.createElement("li");
    let liEmail = document.createElement("li");
    liNome.textContent = element.name;
    liEmail.textContent = element.email;
    myList.appendChild(liNome);
    myList.appendChild(liEmail);
  });
  document.body.appendChild(myList);
}

console.log(myObjVector);
