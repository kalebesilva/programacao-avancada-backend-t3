let ul = document.querySelector(".lista");
let form = document.querySelector(".form");
let urlApi = 'http://localhost:3000/';


// Add event in form, for add new data 
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (form != null || form != undefined) {
      let myformOBJ = new FormData(form);
      let data = myformOBJ.get("input");
      postData(urlApi, returnJsonFileByForm(data))
    }
  });
}

// Write name/url in page
async function write(){
  const arrayObj = await getAll(urlApi);
  arrayObj.forEach(element => {
    let li = document.createElement("li");
    let buttonRemove = document.createElement("button");
    let buttonEdit = document.createElement("button");
    li.innerText = `name: ${element.name}, url:${element.url}`;
    buttonRemove.innerText = "X";
    buttonEdit.innerText = "Edit";
    
    // Add event listener to buttonRemove
    buttonRemove.addEventListener("click", async () => {
      // Delete data from server
      await deleteData(`${urlApi}${element.id}`);
      // Remove li element from page
      li.remove();
    });
    
    // Add event listener to buttonEdit
    buttonEdit.addEventListener("click", () => {
      // Create edit form
      let editForm = document.createElement("form");
      let nameInput = document.createElement("input");
      let urlInput = document.createElement("input");
      let saveButton = document.createElement("button");
      
      nameInput.value = element.name;
      urlInput.value = element.url;
      saveButton.innerText = "Save";
      
      editForm.appendChild(nameInput);
      editForm.appendChild(urlInput);
      editForm.appendChild(saveButton);
      
      // Replace li content with edit form
      li.innerHTML = "";
      li.appendChild(editForm);
      
      // Add event listener to saveButton
      saveButton.addEventListener("click", async (event) => {
        event.preventDefault();
        
        // Update data on server
        await updateData(`${urlApi}${element.id}`, {
          id: element.id,
          name: nameInput.value,
          url: urlInput.value
        });
        
        // Update li content
        li.innerHTML = `name: ${nameInput.value}, url:${urlInput.value}`;
        li.appendChild(buttonRemove);
        li.appendChild(buttonEdit);
      });
    });

    li.appendChild(buttonRemove);
    li.appendChild(buttonEdit);
    ul.appendChild(li);
  });
  document.body.append(ul);
}

write();

async function updateItem() {
  const response = await updateData(`${urlApi}${updatedData.id}`, );
  console.log(response);
}


// get all registers in database
async function getAll(url) {
  const response = await fetch(url, { method: 'GET'});
  const data = await response.json();
  return data;
}

// insert new register in database
async function postData(url, data) {
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

// update existent register in database
async function updateData(url, data) {
  // Default options are marked with *
  const response = await fetch(url, {
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

// delete data in database
async function deleteData(url) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer" // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
   
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

// return fomatted obj
function returnJsonFileByForm(data) {
  if(data === null || data === undefined){
    console.log("data Vazia")
    return {id: 1,name:"Erro",url:"htttp://Erro.com"}
  }
  const [id, name, url] = data.split(',');
  return {
    id: +id,
    name: name,
    url: url
  }
  
}


