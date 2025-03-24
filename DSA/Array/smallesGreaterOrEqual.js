// Problem: Given a sorted array of distinct integers, find the smallest element that is greater than or equal to the target. If no such element exists, return -1.

function smallestGreaterOrEqual(arr, target) {
    let left = 0;
    let right = arr.length-1;

    let result = -1;

    while(left <= right) {
        let mid = Math.floor((left+right)/2);

        if(arr[mid] >= target) {
            result = arr[mid];

            right =  mid-1;

        } else {
            left = mid + 1;
        }
    }
    return result;
}

let arr = [ 1, 3, 4, 5,  7, 8];

let target = 6;

console.log(smallestGreaterOrEqual(arr, target));