function fetchData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const success = false;
            success?resolve("Data recieved"):reject("Error occured");
        },1000)
    })
}

fetchData()
.then((data) => console.log(data))
.catch((err) => console.log(err))
.finally(() => console.log("Request finished;"))