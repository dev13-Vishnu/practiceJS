import EventEmitter from 'events';

const myEmitter = new EventEmitter();

myEmitter.on('greet',(name, callback) => {
    console.log(`Hello ${name}`);
    callback();
})

myEmitter.emit('greet','Vishnu',()=> {
    console.log('Callback executed after greeting!');
});