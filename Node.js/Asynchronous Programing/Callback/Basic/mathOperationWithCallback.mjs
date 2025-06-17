function calculate(a,b, callback){

    const result = callback(a,b);
    console.log(`Result: ${result}`);
}

// function sum(a,b) {
//     return a+b
// }

// calculate(4,6,sum);
calculate(4,6, function(a,b) {
    return a+b
})