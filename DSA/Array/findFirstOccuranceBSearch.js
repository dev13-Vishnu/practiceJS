//Problem: Given a sorted array of integers that can contain duplicates, return the index of the first occurrence of the target. If the target is not present, return -1.
function firstOccurance  (arr, target) {
    let left = 0;
    let right = arr.length -1;
    let result = -1

    while(left<= right) {

        let mid = Math.floor((left+ right)/2);

        if(arr[mid] === target) {
            result = mid;

            right = mid-1
        } else if (arr[mid] > target) {
            right = mid -1;
        } else {
            left = mid + 1;
        }
    }
    return result;
}

let arr = [ 1, 2, 3, 4, 5, 6, 7];

console.log(firstOccurance(arr, 4));