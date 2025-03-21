function thirdLargestElement (arr) {
    if(arr.length < 3) return "Not enough elements";

    let first = -Infinity , second = -Infinity, third= -Infinity;

    for(let num of arr) {
        if (num > first) {
            third = second;
            second = first;
            first = num;
        } else if (num > second && num < first) {
            third = second;
            second= num;
        } else if (num> third && num < second) {
            third = num
        } 
    }
    return third === -Infinity? "Not enough unique elements": third
}

console.log("third largest number:",thirdLargestElement([10, 5, 20, 8, 15]));