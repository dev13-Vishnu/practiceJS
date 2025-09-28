class MinHeap{
    constructor() {
        this.heap=[];
    }
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }
    heapifyUp() {
        let index = this.heap.length -1;
        while(index > 0) {
            let parentIndex = this.getParentIndex(index);
            if(this.heap[parentIndex]> this.heap[index]) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else break;
        }
    }
    getParentIndex(i) {
        return Math.floor((i -1) / 2);
    }
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    extractMin() {
        if (this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();

        let min =this.heap[0]
        this.heap[0]= this.heap.pop();
        this.heapifyDown();

        return min

    }
    heapifyDown() {
    let index = 0;

    while (true) {
        let leftIndex = this.getLeftIndex(index);
        let rightIndex = this.getRightIndex(index);
        let smallest = index;

        if (leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[smallest]) {
            smallest = leftIndex;
        }

        if (rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[smallest]) {
            smallest = rightIndex;
        }

        if (smallest !== index) {
            this.swap(index, smallest);
            index = smallest;
        } else break;
    }
}

    peek() {
        return this.heap.length === 0 ? null : this.heap[0];
    }

    getLeftIndex(i) {
        return  2 * i + 1;
    }
    getRightIndex(i) {
        return 2 * i + 2;
    }

}


let minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
minHeap.insert(2);

console.log(minHeap.peek());      // 2
console.log(minHeap.extractMin()); // 2
console.log(minHeap.extractMin()); // 5
console.log(minHeap.extractMin()); // 10
