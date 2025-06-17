import EventEmitter from 'events';

const myEmitter = new EventEmitter();

myEmitter.on('add',(a,b)=> {
    console.log('Sum:', a+b);
})

myEmitter.emit('add',7,8);