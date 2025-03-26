const person = {name: "Alice", age: 25, city:"New York"};

console.log("Person:",Object.entries(person))

const user = { id: 101, name: "John", role:"admin"};

Object.entries(user).forEach(([key,value]) => {
    console.log(`${key}:${value}`)
})

const obj = {a: 1, b: 2, c: 3}

const map = new Map (Object.entries(obj));
console.log(map);
console.log(map.get("b"));


const data = { name : "Bob", age: null, city: "London", country: undefined};

const filteredEntries= Object.entries(data).filter(([key,value])=> value !== null && value !== undefined);

const filteredObjects =Object.fromEntries(filteredEntries);

console.log(filteredObjects);

const obj2 = {a:1, b:2, c:3};

const swapped = Object.fromEntries(Object.entries(obj2).map(([key,value]) => [value,key]));

console.log(swapped);