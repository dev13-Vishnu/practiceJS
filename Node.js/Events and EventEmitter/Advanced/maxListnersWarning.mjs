import EventEmitter from 'events';

const emitter = new EventEmitter();

emitter.setMaxListeners(20);
for(let i = 1; i <= 25; i++) {
    emitter.on('ping',() => console.log(`Listner ${i} responding to ping`));
}

emitter.emit('ping');