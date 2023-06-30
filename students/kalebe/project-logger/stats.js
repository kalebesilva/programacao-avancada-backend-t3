const os = require("os");
const { freemem, totalmem } = os;
const activeEmitter = require('./logger');


function getFreeMemory(){

    return parseInt(freemem() / 1024 / 1024);
}

function getTotalMemory(){
    return parseInt(totalmem() / 1024 / 1024);
}

function getUsingMemory(){
    return 100 - parseInt((getFreeMemory() / getTotalMemory()) * 100);
}

function getObjMemory(){
    return  {
        total: `${getTotalMemory()} MB`,
        free: `${getFreeMemory()} MB`,
        using: `${getUsingMemory()}%`,
      };
}

function showMemoryStatusInTerminal(){
    console.clear();
    console.table( getObjMemory());
    console.log("Running logger");
}
setInterval(() => {
    showMemoryStatusInTerminal();
    activeEmitter(`${JSON.stringify(getObjMemory())}\n`);
    
}, 1000);







