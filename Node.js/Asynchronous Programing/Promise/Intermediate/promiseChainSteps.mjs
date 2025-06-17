function loadName (){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Vishnu');
        }, 1000);
    });
}

function greetName(name) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`Hello ${name}`);
        }, 1000);
    });
}

function logCompletion(message) {
    return new Promise((resolve) => {
        setTimeout(() => {
        console.log(message);
        resolve('Process compleated.');
        }, 1000);
    })
}


loadName()
.then(name => greetName(name))
.then(greeting => logCompletion(greeting))
.then(status => console.log(status))
.catch(err=> console.error("Error: ", err.message));