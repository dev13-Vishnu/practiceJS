function thirdLargestElement(arr) {
    if(arr.length< 3) return "Not enough element.";

    let minHeap = new Set();
    for(let num of arr) {
        minHeap.add(num);
        if(minHeap.size> 3) minHeap.delete(Math.min(...minHeap))
    }

    return minHeap.size <3 ? "Not enough unique elements.": Math.min(...minHeap);
}
console.log("The third largest element:", thirdLargestElement([10, 5, 20, 8, 15]))