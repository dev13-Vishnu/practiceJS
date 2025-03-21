function combineArraysAlternatively (arr1,arr2) {
    let combinedArray = [];
    let maxLength = Math.max(arr1.length,arr2.length);

    for(let i = 0; i< maxLength; i++) {
        if(i< arr1.length) {
            combinedArray.push(arr1[i]);
        }
        if (i< arr2.length) {
            combinedArray.push(arr2[i]);
        }
    }
    return combinedArray;
}

let arr1 = [1, 2, 3];
let arr2 = ["a", "b", "c", "d", "e", "f"];

console.log("combined array:", combineArraysAlternatively(arr1,arr2))