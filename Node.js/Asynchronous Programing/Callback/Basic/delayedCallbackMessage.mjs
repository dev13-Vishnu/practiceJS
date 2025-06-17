function delayedMessage(callback) {
    console.log('Loading...');
    setTimeout(() => {
        callback();
    }, 2000);
}

function message() {
    console.log("Ah shit...! Here we go again.");
}

delayedMessage(message);