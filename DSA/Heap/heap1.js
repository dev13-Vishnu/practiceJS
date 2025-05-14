class MinHeap{
    constructor() {
        this.heap = [];
    }
    addNum(value){
        this.heap.push(value);
        this.bubbleUp()
    }

    bubbleUp() {
        let index = this.heap.length-1;
        while (index > 0) {
            let parentIndex = Math.floor((index -1)/2);
            if(this.heap[parentIndex] < this.heap[index]) break;                [this.heap[parentIndex],this.heap[index]] = [this.heap[index],this.heap[parentIndex]]
            index = parentIndex;
            
        }
    }
    removeMin() {
        if(this.heap.length === 1) return this.heap.pop();
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }
    bubbleDown() {
        let index = 0;
        let length = this.heap.length;
        let swap = null;
        while(true) {
            let leftChildIndex = 2 * index +1;
            let rightChildIndex = 2 * index + 2;

            if(leftChildIndex < length && this.heap [index] < this.heap[leftChildIndex]){
                swap = leftChildIndex;
            }
            if(rightChildIndex < length && this.heap[index]< this.heap[rightChildIndex]){
                swap = rightChildIndex;
            }
            if(!swap) break;
            [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
            index = swap;
        }


    }
}

 let minHeap = new MinHeap();

for(let i =10; i >0; i--) {
    minHeap.addNum(i);
}

console.log(minHeap)