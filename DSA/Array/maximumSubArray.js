// 2. Maximum Subarray (Kadane's Algorithm):
// Problem Statement:
// Find the contiguous subarray within a one-dimensional array of numbers that has the largest sum.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6

function maxSubArray(arr)  {
    let currentMax = arr[0];
    let maxSofar = arr[0];

    for(let i = 0; i< arr.length; i++){
        currentMax = Math.max(nums[i], currentMax+ arr[i]);
        maxSofar = Math.max(maxSofar,currentMax);

    }
    return maxSofar;
}

const nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums))