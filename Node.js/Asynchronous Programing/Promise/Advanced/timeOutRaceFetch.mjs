function slowFetch() {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve("Success");
        }, 3000);
    })
}

function timeOut(ms) {
    return new Promise((_,reject) => {
        setTimeout(() => {
            reject(new Error(`⏰ Timed out afer ${ms}`))
        }, ms);
    })
}


Promise.race([slowFetch(), timeOut(2000)])
.then(result => console.log(result))
.catch(err=> console.log(err.message));