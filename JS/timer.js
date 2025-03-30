let count=1;
let cancel = setInterval(() => {
    console.log(count++);
    if(count > 10) {
        clearInterval(cancel);
    }
}, 1000);