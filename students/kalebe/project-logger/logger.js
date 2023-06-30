const { EventEmitter } = require('events');
const memoryStats = require('./stats');
const fs = require('fs');
const path = require('path');

const emitter = new EventEmitter();

emitter.on(memoryStats,(mensage)=>{
    setInterval(() => {
        fs.appendFile(path.join(path.dirname(), './log.txt'),mensage, (err)=>{
            if(err) throw err;
        })
    }, 1000);
    

 

})

emitter.emit(memoryStats)

