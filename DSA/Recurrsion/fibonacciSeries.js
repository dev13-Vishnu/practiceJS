// function fibonacciSeries(n) {
//     if(n <= 0) {
//         return []
//     } else if( n === 1) {
//         return [0];
//     }
//     let fib = [0, 1];
//     for(let i = 2; i< n; i++ ) {
//         fib.push(fib[i-1] + fib[i- 2]);
//     }
//     return fib;
// }


// console.log(fibonacciSeries(3));
// console.log(fibonacciSeries(5));
// console.log(fibonacciSeries(10));

function fibonnacci(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    return fibonnacci(n-1)+ fibonnacci(n-2);
}
function fibonacciSeries(n) {
    let series = [];
    for(let i = 0; i< n; i++ ) {
        series.push(fibonnacci(i));
    }
    return series;
}

console.log(fibonacciSeries(5));
console.log(fibonacciSeries(10));