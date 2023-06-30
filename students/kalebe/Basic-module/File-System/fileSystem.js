const fs = require("fs");

console.log("Primeira saída");

fs.readFile("./file.txt",(err, dataOfFile)=> { // Basicamente esse método read File só funciona 
    if(err) return console.error(err);// de maneira assincrona, entao, passamos uma arrow function para utilizar callback
    console.log(String(dataOfFile));

});

console.log("Segunda saída");

console.log("Terceira saída");