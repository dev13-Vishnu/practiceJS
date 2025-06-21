function wait(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

wait(1000)
.then(()=> console.log("Done"));

async function asyncWait() {
    try {
        await wait(1000);
        console.log('Done')
    } catch (error) {
        console.error(error);
    }
}