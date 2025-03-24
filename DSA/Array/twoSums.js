// 1. Two Sum Problem:
// Problem Statement:
// Given an array of integers, return the indices of the two numbers that add up to a specific target.

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1] 
// Explanation: Because nums[0] + nums[1] = 2 + 7 = 9

function twoSum (arr, target) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++ ) {
        let compliment = target - arr[i];

        if(map.has(compliment)) {
            return [map.get(compliment), i];
        }
        map.set(arr[i], i);
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));