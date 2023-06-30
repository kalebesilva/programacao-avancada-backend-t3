const { EventEmitter } = require('events');
const memoryStats = require('./stats');
const fs = require('fs');
const path = require('path');

const emitter = new EventEmitter();

emitter.on(memoryStats,(mensage)=>{
    fs.appendFile(path.join(path.dirname(), './log.txt'),mensage, (err)=>{
        if(err) throw err;
    })

 

})

emitter.emit(memoryStats.memoryStats)

