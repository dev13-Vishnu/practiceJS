function* valueFromArray(arr) {
    for(items of arr) {
        yield items;
    }
}

let gen = valueFromArray(["a","b","c","d","e","f"])

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);