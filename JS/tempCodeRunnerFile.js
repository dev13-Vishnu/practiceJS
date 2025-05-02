let obj = {name:"Vishnu"};

let weakRef = new WeakRef(obj);

console.log(weakRef.deRef());

obj= null;
