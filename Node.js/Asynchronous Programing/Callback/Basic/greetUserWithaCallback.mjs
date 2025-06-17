function greetUser(name, callback) {
    console.log('Hello ', name);
    callback();
}

function afterGreeting() {
    console.log("callback has been executed")
}

greetUser('Vishnu', afterGreeting)