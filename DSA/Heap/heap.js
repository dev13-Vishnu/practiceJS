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
        let index = 0;
        const length = this.heap.length;
    
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;
    
            if (left < length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
    
            if (right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }
    
            if (smallest === index) break;
    
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
    
}

let heap = new MinHeap();

for(let i = 10; i >0; i--) {
    heap.addnum(i);
}

console.log(heap)

