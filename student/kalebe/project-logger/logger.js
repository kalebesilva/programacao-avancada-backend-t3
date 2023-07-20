const { EventEmitter } = require("events"); // importando emitter de events
const fs = require("fs"); // importando file system
const path = require("path"); // importando path

const emitter = new EventEmitter(); //Cria um novo objeto de evento Emitter

//Escuta quando o evento com a string "activateEmitter" será gritado
emitter.on("activateEmitter", (messaged) => {
  //utiliza o file system para escrever em um arquivo TXT
  fs.appendFile(/*utiliza o diretorio absoluto*/path.join(__dirname, "./log.txt"), /*Passa a string para ser escrita no arquivo txt
  */messaged, (err) => {
    if (err) throw err; //Trata caso ocorra algum erro.
  });
});

function activeEmitter(messaged) { // grita uma string "activateEmitter" e uma string 
  emitter.emit("activateEmitter", messaged);
}

module.exports = activeEmitter; // exporta a funcao com modules do node
