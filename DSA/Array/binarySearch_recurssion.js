function BinarySearch(arr, target, left, right) {
    if(left > right) {
        return 'not found';
    };
    let mid = Math.floor((left + right)/2);
    if (arr[mid] === target) {
        return mid;
    } else if (target > arr[mid]) {
        return BinarySearch(arr,target,mid + 1, right);
    } else {
        return BinarySearch(arr,target,left, mid-1);
    }

}
let arr = [1,2,3,4,5,6,7,8,9];

let target = 5;
let result = BinarySearch(arr, target,0, arr.length -1);

console.log(result);