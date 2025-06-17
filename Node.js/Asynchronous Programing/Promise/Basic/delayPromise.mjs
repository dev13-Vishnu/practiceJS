function delay(seconds) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(seconds)
        }, seconds*1000);
    })
}

delay(2)
.then(msg=> console.log(`${msg} seconds passed.`))