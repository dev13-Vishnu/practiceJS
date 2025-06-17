import EventEmitter from 'events';

const myEmitter = new EventEmitter();

myEmitter.on('start', ()=> {
    console.log('Process Started.');
})
.on('progress',()=> {
    console.log('Process is on progress');
})
.on('end',()=> {
    console.log('process ended');
})

myEmitter.emit('start');
myEmitter.emit('progress');
myEmitter.emit('end');