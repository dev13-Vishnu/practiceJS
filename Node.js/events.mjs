import EventEmitter from 'events'
const emitter = new EventEmitter();

emitter.on("Order-pizza",(size,toppings) => {
    console.log(`Order recived! Baking a ${size} pizza with ${toppings}`)
}
)
emitter.emit("Order-pizza", "large", "peperoni");