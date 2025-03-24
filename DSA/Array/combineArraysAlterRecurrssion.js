function combineArraysAlternativelyRecurrssion(arr1,arr2, index =0, combinedArray = []) {
    if(index >= arr1.length && index >=arr2.length) {
        return combinedArray
    }
    if(index < arr1.length) {
        combinedArray.push(arr1[index]);
    }
    if(index < arr2.length) {
        combinedArray.push(arr2[index]);
    }
    return combineArraysAlternativelyRecurrssion(arr1,arr2,index + 1, combinedArray);
}

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 0];

console.log(combineArraysAlternativelyRecurrssion(arr1, arr2))