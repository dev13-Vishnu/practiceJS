function* evenNumbers(limit) {
    for(let i = 0; i<= limit; i +=2) {

        yield i;
    }
}

const even = evenNumbers(10);

console.log(even);

let arr = []

for(nums of even) {
    console.log(nums);
    arr.push(nums);
}

console.log("array:",arr);