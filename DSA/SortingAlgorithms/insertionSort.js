function insertionSort(arr) {

    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let temp = arr[i];

        let j = i-1;

        while(j >=0 && arr[j] > temp){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j+ 1] = temp;
    }
    return arr
}

let arr= [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted Array:", insertionSort(arr));
