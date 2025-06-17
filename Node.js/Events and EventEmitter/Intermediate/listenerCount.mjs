import EventEmitter from 'events';

const myEmitter = new EventEmitter();

myEmitter.on('ping',() => console.log('Listner 1'));

myEmitter.on('ping',()=> console.log('Listner 2'));

const count = myEmitter.listenerCount('ping');

console.log(`Number fo listners for "ping" : ${count}`)