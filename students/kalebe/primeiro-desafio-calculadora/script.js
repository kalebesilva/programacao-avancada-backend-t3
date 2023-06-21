let soma = document.getElementById("soma");

let div = document.getElementById("div");

let mult = document.getElementById("mult");

let sub = document.getElementById("sub");

if (soma) {
  soma.addEventListener("click", () => {
    let n1 = document.getElementById("first-number").value;
    let n2 = document.getElementById("second-number").value;
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    console.log(typeof n1);
    let result = n1 + n2;
    document.write("<p>" + result + "</p>");
  });
}

if (div) {
  div.addEventListener("click", () => {
    let n1 = document.getElementById("first-number").value;
    let n2 = document.getElementById("second-number").value;
    let p = document.getElementsByClassName("resultado");
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    let result = n1 / n2;
    document.write("<p>" + result + "</p>");
  });
}

if (mult) {
  mult.addEventListener("click", () => {
    let n1 = document.getElementById("first-number").value;
    let n2 = document.getElementById("second-number").value;
    let p = document.getElementsByClassName("resultado");
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    let result = n1 * n2;
    document.write("<p>" + result + "</p>");
  });
}

if (sub) {
  sub.addEventListener("click", () => {
    let n1 = document.getElementById("first-number").value;
    let n2 = document.getElementById("second-number").value;
    let p = document.getElementsByClassName("resultado");
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    let result = n1 - n2;
    document.write("<p>" + result + "</p>");
  });
}
