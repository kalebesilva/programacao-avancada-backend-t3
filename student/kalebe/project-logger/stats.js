const os = require("os"); // importando sistema operacional
const activeEmitter = require("./logger"); // importando funcao de logger, resposavel por emitir um "grito "

const { freemem, totalmem } = os; //Desistruturacao de OS, pega apenas os métodos que retornam a quantidade de memoria livre e total.

function getTotalMemory() {
  // Retorna a quantidade total de memoria disponivel da máquina (formatada para MB)
  return parseInt(totalmem() / 1024 / 1024);
}

function getFreeMemory() {
  // Retorna a quantidade de memoria livre (formatada para MB)

  return parseInt(freemem() / 1024 / 1024);
}

function getUsingMemory() {
  // Retorna a porcentagem de memoria usada atualmente na máquina.
  return 100 - parseInt((getFreeMemory() / getTotalMemory()) * 100);
}

function getObjMemory() {
  // retorna um objeto com as propriedades de - Memoria total da máquina, Memoria livre e mémoria usada no momento
  return {
    total: `${getTotalMemory()} MB`,
    free: `${getFreeMemory()} MB`,
    using: `${getUsingMemory()}%`,
  };
}

//Mostra em forma de table as informacoes referentes a memoria
function showMemoryStatusInTerminal() {
  console.clear(); //Limpa o console
  console.table(getObjMemory()); //Mostra o obj da memoria em formato de table
  console.log("Running logger");//Informa que o programa está rodando
}
//Define um intervalo de tempo para uma determinada acao
setInterval(() => { 
  showMemoryStatusInTerminal(); // chama a funcao que exibe informacoes no console
  activeEmitter(`${JSON.stringify(getObjMemory())}\n`); // chama a funcao que emite um "grito" passando o obj da memoria em forma de string
}, 1000);// essa acao irá se repetir a cada 1 segundo
