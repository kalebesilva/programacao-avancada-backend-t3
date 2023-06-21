let soma = document.getElementById("soma");
let div = document.getElementById("div");
let mult = document.getElementById("mult");
let sub = document.getElementById("sub");

let array = []

if (soma) {
  soma.addEventListener("click", () => {
    let n1 = parseFloat(document.getElementById("first-number").value)
    let n2 = parseFloat(document.getElementById("second-number").value)
    array.push((n1+n2))
    console.log(JSON.stringify(array))

  });
}

if (div) {
  div.addEventListener("click", () => {
    let n1 = parseFloat(document.getElementById("first-number").value)
    let n2 = parseFloat(document.getElementById("second-number").value)
    array.push((n1/n2))
    console.log(JSON.stringify(array))
    
  });
}

if (mult) {
  mult.addEventListener("click", () => {
    let n1 = parseFloat(document.getElementById("first-number").value)
    let n2 = parseFloat(document.getElementById("second-number").value)
    array.push((n1*n2))
    console.log(JSON.stringify(array))

   
  });
}

if (sub) {
  sub.addEventListener("click", () => {
    let n1 = parseFloat(document.getElementById("first-number").value)
    let n2 = parseFloat(document.getElementById("second-number").value)
    array.push((n1-n2))
    console.log(JSON.stringify(array))
   
  });
}
