//Microtasks
console.log("Script Start");

Promise.resolve().then(()=>console.log("Promise 1"));
Promise.resolve().then(()=> console.log("Promise 2"));

console.log("Script End");
// microtasks execute AFTER syncronous code but BEFORE macrotasks.

//Macrotasks

console.log("Script Start");

setTimeout(() => console.log("setTimeout"),0);

Promise.resolve().then(()=> console.log("Promise"));    

console.log("Script end");

//Execution Order Microtasks first

console.log("Script starts.");

setTimeout(()=> console.log("setTimeout."),0);

Promise.resolve().then(()=>console.log("Microtask 1: Promise 1"));
Promise.resolve().then(() => console.log("Microtask 2: Promise 2"));

console.log("Script end.");



