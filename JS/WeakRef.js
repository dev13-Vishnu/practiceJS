let obj = { name: "Vishnu" };

let weakRef = new WeakRef(obj);

console.log("Before setting null:", weakRef.deref());

obj = null;

global.gc(); 

setTimeout(() => {
    console.log("After timeout and GC:", weakRef.deref());
}, 1000);
