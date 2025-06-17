import EventEmitter from 'events';

class EmitterWrapper {
    constructor() {
        this.emitter = new EventEmitter();
    }
    listen(eventName,callback) {
        this.emitter.on(eventName,callback);
        return this;
    }
    trigger(eventName, ...args) {
        this.emitter.emit(eventName,...args);
    }
}

const wrapper = new EmitterWrapper();

wrapper
.listen('message',(text) => {
    console.log(` Message received: ${text}`);
})
.listen('status',(status) =>{
    console.log(` Status: ${status}`);
});

wrapper.trigger('message','Hello Vishnu!');
wrapper.trigger('status', 'Online');