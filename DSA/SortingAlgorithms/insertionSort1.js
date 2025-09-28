function insertionSort(arr) {
    let n = arr.length;

    for(let i= 1; i<  arr.length; i++) {    
        let key = arr[i]
        j =  i -1;

        while( j >= 0 && arr[j] > key){
            arr[j+ 1] = arr[j];
            j--
        }
        arr[j+ 1] = key;
    }
    return arr;
}

// Example usage
let numbers = [9, 5, 1, 4, 3];
console.log("Sorted:", insertionSort(numbers));
