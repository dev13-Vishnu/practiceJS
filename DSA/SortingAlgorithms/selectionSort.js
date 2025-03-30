function selectionSort(arr) {
    let n = arr.length;
    for(let i =0; i< n; i++) {
        let min = i;
        for(let j = i+1; j< n ; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min != i) {
            [arr[min], arr[i]] = [arr[i], arr[min]]
        }
    }
    return arr;
}

let arr= [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted Array:", selectionSort(arr));
