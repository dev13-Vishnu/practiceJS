import EventEmitter from 'events';

const myEmitter = new EventEmitter();

function firstEmiter() {
    console.log('First emitter executed!');
}

function secondEmitter() {
    console.log('Second emitter executed!');

}

myEmitter.on('update',firstEmiter);

myEmitter.on('update',secondEmitter);

// myEmitter.off('update',firstEmiter);
myEmitter.removeListener('update',firstEmiter);

myEmitter.emit('update');