import EventEmitter from 'events';

const myEmitter  = new EventEmitter();

// const event = 'onceTest'

myEmitter.once('onceTest', () => {
    console.log('This runs only once!');
})

myEmitter.emit('onceTest');
myEmitter.emit('onceTest');