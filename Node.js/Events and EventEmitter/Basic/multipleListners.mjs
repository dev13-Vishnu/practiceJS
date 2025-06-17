import EventEmitter from 'events';

const myEmitter = new EventEmitter();

myEmitter.on('multi',() => {
    console.log("Listner 1 executed.");
})

myEmitter.on('multi',()=>{
    console.log('Listner 2 executed.');
})

myEmitter.emit('multi');