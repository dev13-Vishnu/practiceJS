const error1 = new Error("First Error");
const error2 = new Error("Second Error");

const aggErr = new AggregateError([error1,error2],"Multiple Error occured");

console.log(aggErr.message);
console.log(aggErr.errors);

const p1 =  Promise.reject("failed 1");
const p2 =  Promise.reject("Failed 2");

Promise.any([p1,p2])
.then(result =>console.log(result))
.catch(err => {
    console.log(err instanceof AggregateError);
    console.log(err.message);
    console.log(err.errors);
})