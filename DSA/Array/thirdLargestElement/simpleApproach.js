function thirdLargestElement(arr) {
    if(arr.length < 3) return "Not enough elements.";
    let sortedArr = [...new Set(arr)].sort((a,b) =>b-a);
    if(sortedArr.length < 3) return "Not enough unique elements.";
    console.log("Sorted arr:", sortedArr)
    return sortedArr[2];
}

console.log(thirdLargestElement([10, 5, 20, 8, 15]))
console.log(thirdLargestElement([10, 10, 30]))