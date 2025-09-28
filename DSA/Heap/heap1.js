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
            if(this.heap[parentIndex] < this.heap[index]) break;                
            [this.heap[parentIndex],this.heap[index]] = [this.heap[index],this.heap[parentIndex]]
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

 let minHeap = new MinHeap();

for(let i =10; i >0; i--) {
    minHeap.addNum(i);
}

console.log(minHeap)