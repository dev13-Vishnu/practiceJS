let user = {
    name: "Vishnu",
    skills: ["Javascript", "React", "Node.js"],
    details:{age:29,locatiaon:"India"}
};

let clonedUser = structuredClone(user);
let assignedUser = Object.assign(user);

console.log(clonedUser);

clonedUser.name = "John";
clonedUser.details.age = 30;

console.log(clonedUser);

let complexObj = {
    name: "Alice",
    date: new Date(),
    map: new Map([["key1","value1"]]),
    set : new Set([1,2,3])
}

let clonedObj = structuredClone(complexObj);

console.log(clonedObj);

let obj = {name: "Vishnu"};
obj.self = obj;
console.log(obj);

let clonedCircularObj = structuredClone(obj);

console.log("clonedCircularObj:", clonedCircularObj)