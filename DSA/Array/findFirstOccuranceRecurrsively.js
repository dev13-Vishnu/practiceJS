function firstOccuranceRecurssively (arr, target, left, right ) {
    if (left> right){
        return -1;
    }

    let mid = Math.floor((left + right)/2);

    if(mid === 0 || arr[mid -1] < target && arr [mid] === target) {
        return mid;
    }
    if(arr[mid] <=target) {
        return firstOccuranceRecurssively(arr, target, mid+1, right);
    } else {
        return firstOccuranceRecurssively(arr, target, left, mid-1);
    }
}

let arr = [ 1, 2, 3, 3, 4, 5, 5, 6, 7, 8];

console.log(firstOccuranceRecurssively(arr,3,0,arr.length-1))