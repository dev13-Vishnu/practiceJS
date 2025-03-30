//convert an Array like ObJSON.stringify(ct to arra)y

//Syntax Array.from(iterable, mapFunction, thisArg);

const str = "Hello";
const arr = Array.from(str);

console.log(arr);

//convert set to an Array
const set = new Set([1, 2, 3, 4]);
console.log(set);   
const arrFromSet = Array.from(set);

console.log(arrFromSet);

//convert map to an Array
const map = new Map ([["a",1],["b",2]]);
const arrFromMap = Array.from(map);

console.log(map);
console.log(arrFromMap);
console.log(JSON.stringify(arrFromMap) == JSON.stringify([['a',1],['b',2]]));

//converts arguments to an array

function exmple(argument) {

    console.log(arguments) 
    let argsArray = Array.from(arguments);
    console.log(argsArray);
}

exmple(1,2,3);

//Using Array.from() with a maping function
const numbers = [1, 2, 3, 4, 5];

const squares = Array.from(numbers, num => num * num);

console.log (squares);
// genrate an array of specific length

const arrWithLength = Array.from({length:5},(_,i) => i+1);

console.log(arrWithLength);

//Removing undefined elements from sparse array
    //sparse array contains emply slots. Array.from() converts them to undefined.

const sparse = [1, , 2];
const filledArray = Array.from(sparse);

console.log(filledArray);

