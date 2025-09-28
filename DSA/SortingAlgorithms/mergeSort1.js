function mergeSort(arr, lb =0, ub= arr.length-1) {
    if(lb< ub) {
        let mid = Math.floor((lb+ ub) /2);
        mergeSort(arr, lb, mid);
        mergeSort(arr, mid+ 1, ub);
        merge(arr,lb, mid, ub);
    }
}

function merge(arr, lb, mid, ub){
    let i = lb;
    let j = mid + 1;
    let k =lb;
    let b = [];
    while(i <= mid && j <= ub){
        if(arr[i] < arr[j]){
            b[k] = arr[i];
            i++
        } else {
            b[k] = arr[j];
            j++
        }
        k++
    }
    while (i<= mid) {
        b[k] = arr[i];
        i++;
        k++;
    }
    while (j <= ub){
        b[k] = arr[j]
        j++;
        k++;
    }
    for(let x = lb;x <= ub; x++){
        arr[x] = b[x];
    }

}

// Example usage
let numbers = [9, 5, 1, 4, 3];
mergeSort(numbers)
console.log("Sorted:",numbers );
