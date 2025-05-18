const user = {name: "Vishnu", age:29};
const result = Object.entries(user)
console.log("Object to entries:",result);

const reverse = Object.fromEntries(result);

console.log("from entries;",reverse);

const numOfProperties = result.length;
console.log("Number or properties:",numOfProperties);

//filter out key-value pairs where the value is null or undefined

const data = { a: 1, b: null, c: 3, d: undefined };

const cleanObj = Object.fromEntries(Object.entries(data).filter(([key,value]) => value != null));

console.log("cleaned object:",cleanObj);    

//swap keys and values inside and object
const obj = { a: 1, b: 2 };

let swapped = Object.fromEntries(Object.entries(obj).map(([key,value])=>[value,key]))
console.log("Before swapping:",obj);
console.log("Swapped:",swapped);

//double the value

const prices = { apple: 100, banana: 50 };

const doubbled  = Object.fromEntries(Object.entries(prices).map(([key,value]) => [key, value *2]));

console.log("doubbled :",doubbled );