

const EventEmitter = require("events");

const event = new EventEmitter();

// event.on('sayMyName', () => {
//     console.log("My name is sahil");
// })

// event.on('sayMyName', () => {
//     console.log("doing btech");
// })

// event.on('sayMyName', () => {
//     console.log("need to sleep");
// })
// event.emit("sayMyName");


event.on('checkPage', (sc, msg) => {
    console.log(`status code is ${sc} and message is ${msg}`);
})

event.emit("checkPage", 200, "ok");