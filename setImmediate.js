console.log("Start");

setImmediate(() => console.log("Inside setImmediate"));
process.nextTick(() => console.log("inside process.nextTick"));


console.log("End"); 