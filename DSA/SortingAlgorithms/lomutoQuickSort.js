function quickSort(arr, lb= 0,ub = arr.length -1) {
    if(lb< ub) {
        let loc = partition(arr, lb, ub);
        quickSort (arr, lb, loc -1) 
        quickSort(arr,loc + 1, ub);
    }
    return arr;
}

function partition(arr, lb, ub) {
     let pivot = arr[ub];
     let i =  lb -1;
    for(let j = lb; j < ub ; j++ ){
        if(arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i+1], arr[ub]] = [arr[ub], arr[i+ 1]];
    return i + 1;

}

// Example
let arr = [64, 25, 12, 22, 11];
console.log("Sorted:", quickSort(arr));