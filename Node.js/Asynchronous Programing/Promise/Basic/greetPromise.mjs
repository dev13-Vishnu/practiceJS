const greet   = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello Vishnu");
    }, 1000);
})

greet.then(message => {
    console.log(message);
})