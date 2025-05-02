// write a function which will convert a given obj to string.

// Example
let obj = {
name: "hi",
age: 20
}
// output = "name=hi&age=20"


function objectToSting(obj) {
    return Object.entries(obj).map(([key,value])=> `${key}=${value}`).join('&')
}

console.log(objectToSting(obj));