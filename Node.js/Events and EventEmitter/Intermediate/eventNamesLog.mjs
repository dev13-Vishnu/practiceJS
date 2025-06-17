import EventEmitter from 'events'

const myEmitter = new EventEmitter();

myEmitter.on('login',() => console.log("User Logged in"));

myEmitter.on('logout', () => {
    console.log('User logged out');
});

myEmitter.on("error",(err) => console.error('Error occurred:',err));

const events = myEmitter.eventNames();

console.log('Registered event names:', events);
