function checkEven (number, callback) {
    if(number %2 === 0) {
        callback.onSuccess(number);
    }else {
        callback.onError(number);
    }
}

const callbackHandler = {
    onSuccess: (num) => {
        console.log(`${num} is even.`);
    },
    onError: (num) => {
        console.log(`${num} is odd.`);
    }

}

checkEven(4, callbackHandler);
checkEven(5,callbackHandler);