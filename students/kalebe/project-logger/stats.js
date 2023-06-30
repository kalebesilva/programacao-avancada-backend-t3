const os = require("os");
const { freemem, totalmem } = os;

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

function memoryStats() {
    setInterval(() => {
        return JSON.stringify(getObjMemory());
    
  }, 1000);
}
module.exports = memoryStats;
