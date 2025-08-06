function countOccurance(arr, target, index = 0) {
    if(index === arr.length) return 0;

    const count = arr[index]=== target?1: 0;
    return count + countOccurance(arr, target, index +1);
}


console.log(countOccurance([1, 2, 3,2, 2], 2));