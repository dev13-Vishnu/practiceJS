import { error } from 'console';
import EventEmitter from 'events';

const myEmitter = new EventEmitter();

myEmitter.on('error',(err) => {
    console.error('Custom error occurredd:',err.message);
})

myEmitter.emit('error', new Error('Something went wrong.'));