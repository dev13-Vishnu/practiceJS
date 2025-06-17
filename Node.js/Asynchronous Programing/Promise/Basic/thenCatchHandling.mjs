function  riskyOperation(success = true){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(success) {
                resolve("Operation Succeeded");
            } else {
                reject ( new Error("Operation failed."));
            }
        }, 2000);
    })
}


riskyOperation(false)
.then(msg => console.log("Then:",msg))
.catch(err=> console.error("Error:",err.message));
riskyOperation(true)
.then(msg => console.log("Then:",msg))
.catch(err=> console.error("Error:",err.message));