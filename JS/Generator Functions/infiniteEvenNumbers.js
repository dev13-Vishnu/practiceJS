function* evenNumbers() {
    let num =0;
    while(true){
        yield num;
        num += 2;
    }
}

const gen = evenNumbers();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


