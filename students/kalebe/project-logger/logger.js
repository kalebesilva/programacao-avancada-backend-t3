const { EventEmitter } = require("events");
const memoryStats = require("./stats");

const fs = require("fs");
const path = require("path");

const emitter = new EventEmitter();

emitter.on("activateEmitter", (messaged) => {
  fs.appendFile(path.join(__dirname, "./log.txt"), messaged, (err) => {
    if (err) throw err;
  });
});

function activeEmitter(messaged) {
  emitter.emit("activateEmitter", messaged);
}

module.exports = activeEmitter;
