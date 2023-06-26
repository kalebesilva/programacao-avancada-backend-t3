const fs = require("fs");

console.log("Primeira saída");
fs.readFile("./file.txt",(err, dataOfFile)=> {
    if(err) return console.error(err);
    console.log(String(dataOfFile));

});

console.log("Segunda saída");

console.log("Terceira saída");