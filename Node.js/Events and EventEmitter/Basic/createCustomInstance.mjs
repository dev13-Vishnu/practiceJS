import EventEmitter from 'events';

const myEmitter = new EventEmitter();
myEmitter.on('greet',() => {
    console.log("Hello, Vishnu!");
});

myEmitter.emit('greet');
