let arr  = [0, 1,  1,  2,  3, 5, 8, 13, 21, 34];

let sum = 0;
arr.forEach(Element => {
    if(Element % 2 === 0) {
        sum+= Element;
    }
})
console.log(sum);
