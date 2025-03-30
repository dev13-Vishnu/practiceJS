// function* simpleGenerator() {
//     console.log("Before first yield");
//     yield 1;
//     console.log("Before second yield");
//     yield 2;
// }
// const  gen = simpleGenerator();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

function* genrator() {
    let x = yield "Enter a number";
    let y = yield x* 2;
    return y;

}

const gen = genrator();

console.log(gen.next());
console.log(gen.next(10));
console.log(gen.next(50));