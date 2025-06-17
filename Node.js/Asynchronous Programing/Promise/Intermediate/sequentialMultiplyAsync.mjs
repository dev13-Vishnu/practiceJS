function multiplyAsync(a,b) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const result = a * b;
            console.log(`${a} * ${b} = ${result}`);
            resolve(result);
        }, 1000)
    })
}
const promise = multiplyAsync(2,3);
console.log(promise);
multiplyAsync(2, 3)
.then((result) =>multiplyAsync(result, 4))
.then (result=> multiplyAsync(result,5))
.then(finalResult => console.log('Final Result:', finalResult))
.catch(err => console.error(err.message));