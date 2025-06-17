import EventEmitter from 'events';

const myEmitter = new EventEmitter();

myEmitter.on("status",(obj) => {
    console.log('Status:',obj.online);
})
const status = {online: true}
myEmitter.emit("status",status);