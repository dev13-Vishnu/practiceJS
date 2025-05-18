function isFraction(num) {
    console.log(Math.floor(num) !== num);
}

isFraction(4.5);
isFraction(4);

function isInteger(num) {
    console.log(Number.isInteger(num));
}

isInteger(7);
isInteger(5.5 );

function isTrunc(num) {
    console.log(Math.trunc(num) !==num);
}

isTrunc(4.5);
isTrunc(7);