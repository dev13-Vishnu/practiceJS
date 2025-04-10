function* rangeGenerator(start, end, step= 1){
    for(let i = start; i<= end; i += step) {
        yield i;

    }
}

const gen = rangeGenerator(1,6);

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)