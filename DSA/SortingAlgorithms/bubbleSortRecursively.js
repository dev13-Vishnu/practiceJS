function bubbleSortRec(arr, n= arr.length) {
    if (n  === 1) return arr;

    for(let i = 0; i < n-1; i++) {
        if(arr[i] > arr[i+ 1]) {
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        }
    }
    return bubbleSortRec(arr,n-1);
}

console.log(bubbleSortRec([5,1,4, 2, 8]))