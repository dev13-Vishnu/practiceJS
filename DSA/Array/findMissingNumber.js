// 3. Find Missing Number (Cyclic Sort):
// Problem Statement:
// Given an array containing n distinct numbers taken from the range 0, 1, 2, ..., n, find the one number that is missing from the array.

// Input: nums = [3, 0, 1]
// Output: 2
// Explanation: The missing number is 2 as it is not present in the array.

function findMissingNumber (arr) {
    let n = arr.length;
    let total = (n*(n+1)/2);
    let totalArray = arr.reduce((acc,num)=> acc + num,0);
    return (total- totalArray);
}

console.log(findMissingNumber([0, 1, 3]))