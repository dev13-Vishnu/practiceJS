//creating a Symbol
const mySymbol = Symbol()
console.log(mySymbol);

//Symbol with description

const sym1 = Symbol("mysymbol");
const sym2 = Symbol("mysymbol");

console.log(sym1 === sym2);

const id = Symbol("id");

const user = {
    name: "Alice",
    age: 25,
    [id] : 101
}

console.log(user);

console.log(user[id])

//don not appear in Object.keys() or for...in loops
console.log(Object.keys(user));
for(let key in user) {
    console.log( key);
}

//not auto convertile into strings
const sym = Symbol("test");

try {
    console.log("My symbol is"+ sym);
} catch (error) {
    console.log(error);
    
}

console.log("My symbol is " + sym.toString());

//Globasl symbol with Symbol.for()

const symA = Symbol.for("shared");
const symB = Symbol.for("shared")

    console.log(symA === symB)