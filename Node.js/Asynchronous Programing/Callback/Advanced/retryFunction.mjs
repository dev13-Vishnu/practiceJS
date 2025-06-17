function retry (callback, times) {
    let attempt =0;
    while(attempt < times) {
        try {
            return callback();
        } catch (error) {
            attempt++;
            console.log(`Attempt ${attempt} failed: ${error.message}`)
            if(attempt >= times) {
                throw new Error(`Failed after ${times} attempts`)
            }
        }
    }
}

let counter = 0;
function unstableTask() {
    counter ++;
    if (counter < 3) {
        throw new Error("Still failing...");
    }
    return "Success on attempt " + counter;
}

try {
    const result = retry(unstableTask, 2);
    console.log(result);
} catch (error) {
    console.error("Final Error:", error.message);
}