class MinHeap{
    constructor() {
        this.heap = [];
    }
    addnum(num) {
        this.heap.push(num);
        this.bubbleUp();
    }

    bubbleUp(){
        let index = this.heap.length-1;
        while(index > 0) {
            let parentIndex = Math.floor((index -1)/2);
            if(this.heap[index]> this.heap[parentIndex]) break;
            let temp = this.heap[index];
            this.heap[index] =  this.heap[parentIndex];
            this.heap[parentIndex] = temp;
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
        let index =  0;
        let length = this.heap.length;
        while(true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;

            if(leftChildIndex < length && this.heap[index] < this.heap[leftChildIndex]){
                swap = leftChildIndex;
            }
            if(rightChildIndex < length && this.heap[index] < this.head[rightChildIndex]) {
                swap = rightChildIndex;
            }
            if(!swap) break;
            [this.heap[index] ,this.heap[swap]] = [this.heap[swap],this.heap[index]]
            index = swap;
            
        }
    }
}

let heap = new MinHeap();

for(let i = 10; i >0; i--) {
    heap.addnum(i);
}

console.log(heap)

