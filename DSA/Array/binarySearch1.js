function BinarySearch(arr,target) {
    let start = 0;
    let end = arr.length -1;
    while(start <= end) {
        let mid = Math.floor((start + end)/2);
        if(arr[mid]=== target) return mid;
        else if(arr[mid] < target) start = mid + 1;
        else end = mid -1;
    }
    return -1;
}

const arr = [1, 3, 5, 7, 9, 11];
console.log(BinarySearch(arr, 7)); // Output: 3 (index)
console.log(BinarySearch(arr, 4)); // Output: -1 (not found)
