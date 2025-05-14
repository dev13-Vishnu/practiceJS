const eventEmitter = require ('events');

const myEmitter = new eventEmitter();

myEmitter.once('greet',(name) => {
    console.log(`hello ${name}`)

})

myEmitter.emit('greet','Vishnu');
myEmitter.emit('greet','Bessy');