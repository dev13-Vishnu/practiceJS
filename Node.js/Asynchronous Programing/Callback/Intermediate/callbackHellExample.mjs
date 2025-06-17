function step1(callback) {
    setTimeout(() => {
        console.log("Step 1: connecting to server...");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2: Fetching User data...");
        callback();
    }, 1000);
}

function step3(callback){
    setTimeout(() => {
        console.log("Step 3: Displaying the data on the screeen..");
        callback();
    }, 1000);
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("All step is done.");
        });
    });
});
