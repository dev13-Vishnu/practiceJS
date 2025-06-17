function isEvenAsync(n) {
    return new Promise((resolve,reject) => {
        if(n % 2 === 0) {
            resolve(`${n} is even ✅`);
        } else {
            reject(new Error(`${n} is odd ❌`));
        }
    })
}

isEvenAsync(4).then(msg=> console.log("Success: ", msg))
.catch(err => console.error("Error:", err.message));
isEvenAsync(3)
.then(msg => console.log("Success:", msg))
.catch(err => console.error("Error: ", err.message));
