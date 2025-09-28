function quickSort(arr, lb = 0, ub = arr.length -1){
    if(lb< ub) {
        let loc = partition (arr, lb, ub);
        quickSort(arr, lb, loc -1);
        quickSort(arr, loc + 1, ub);
    }
    return arr;
}

function partition(arr, lb, ub) {
    let start = lb;
    let end = ub;
    let pivot = arr[lb]
    while (start < end) {
        while(arr[start] <= pivot) {
            start++;
        }
        while(arr[end] > pivot){
            end--;
        }
        if(start < end) {
            [arr[start],arr[end]] = [arr[end], arr[start]];
        }
    }
    [arr[lb], arr[end]] =[arr[end], arr[lb]];
    return end;
}

let arr = [64, 25, 12, 22, 11];

console.log(quickSort(arr));