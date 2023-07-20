let form = document.querySelector(".form-class");
let table = document.querySelector(".table-name-url");
let tr = document.createElement("tr");
let tdName = document.createElement("td");
let tdUrl = document.createElement("td");

const url = "http://localhost:3000/";

writeElementInWindow().catch((error) => console.log(error));

//getAll().then(data =>console.log(data))

if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let formData = new FormData(form);
      if (
        formData.get("name") !== null ||
        (formData.get("name") !== undefined && formData.get("url") !== null) ||
        formData.get("url") !== undefined
      ) {
        let data = {
          name: formData.get("name"),
          url: formData.get("url"),
        };
  
        insert(data).catch((err) => console.error(err));
        window.location.reload();
      }
    });
  }

async function writeElementInWindow() {
  let tbody = document.createElement("tbody");
  let arrayData = await getAll();
  for (let i = 0; i < arrayData.length; i++) {
    tbody.appendChild(returnTheElementTrReadyForAddInBody(arrayData[i]));
  }
  table.appendChild(tbody);
  document.body.appendChild(table);
}

// Gera os elementos do tr,td para poder inserir os dados na table
function generateElementsTrAndTd() {
  let arrayTableElements = [
    document.createElement("tr"),
    document.createElement("td"),
    document.createElement("td"),
  ];
  return arrayTableElements;
}

function createdEditButton(data) {
  // Create edit button
  let editButton = document.createElement("button");
  editButton.innerText = "Edit";
  let tdEditButton = document.createElement("td");
  tdEditButton.appendChild(editButton);

  // Add event listener to edit button
  editButton.addEventListener("click", () => {
    // Create edit form
    let editForm = document.createElement("form");

    // Create name input
    let nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "name";
    nameInput.value = data.name;
    editForm.appendChild(nameInput);

    // Create url input
    let urlInput = document.createElement("input");
    urlInput.type = "text";
    urlInput.name = "url";
    urlInput.value = data.url;
    editForm.appendChild(urlInput);

    // Create submit button
    let submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.innerText = "Submit";
    editForm.appendChild(submitButton);

    // Add event listener to form submit event
    editForm.addEventListener("submit", (event) => {
      event.preventDefault();

      // Get edited data from form
      let editedData = {
        name: nameInput.value,
        url: urlInput.value,
      };

      // Call update function with edited data
      updateById(editedData, data._id);

      // Remove edit form from HTML
      document.body.removeChild(editForm);
      window.location.reload();
    });
    document.body.appendChild(editForm);
  });

  return tdEditButton;
}

function createdDeleteButton(data) {
  // Create delete button
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  let tdDeleteButton = document.createElement("td");
  tdDeleteButton.appendChild(deleteButton);

  tdDeleteButton.addEventListener("click", () => {
    deleteById(data._id);
    window.location.reload();
  });

  return tdDeleteButton;
}

// configura o element TR e retorna ele contendo os dados TD com seus respectivos valores
function returnTheElementTrReadyForAddInBody(data) {
  let tableElementsArray = generateElementsTrAndTd();
  tableElementsArray[1].innerText = `${data.name}`;
  tableElementsArray[2].innerText = `${data.url}`;

  tableElementsArray[0].appendChild(tableElementsArray[1]);
  tableElementsArray[0].appendChild(tableElementsArray[2]);
  tableElementsArray[0].appendChild(createdEditButton(data));
  tableElementsArray[0].appendChild(createdDeleteButton(data));

  return tableElementsArray[0]; // Retorna o element TR
}

async function getAll() {
  const response = await fetch(url, { method: "GET" });
  const data = await response.json();
  return data;
}

async function insert(data) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function updateById(data, id) {
  // Default options are marked with *
  const response = await fetch(url + id, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function deleteById(id) {
  // Default options are marked with *
  const response = await fetch(url + id, {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
