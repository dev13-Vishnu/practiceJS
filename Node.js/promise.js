const promise = new Promise((resolve, reject) => {
    if(false) {
        resolve("sucessfull");
    } else {
        reject("something wrong happend")
    }
})

promise.then(result =>console.log(result))
.catch((err) =>console.log(err));