const myPromise = new Promise((resolve,reject) => {
    let success = false;
    setTimeout(() => {
        if (success) {
            resolve("Data recieved.");
        } else {
            reject("Error:something went wrong.")
        }
    },1000)
})

myPromise.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log("done")
});