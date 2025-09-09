class PriorityQueue{
    constructor() {
        this.items = [];
    }
    enqueue(element,priority){
        const newItem = {element, priority};
        let added = false;
        for(let i = 0; i < this.items.length; i++){
            if(priority< this.items[i].priority){
                this.items.splice(i,0,newItem);
                added = true;
                break;
            }
        }
        if(!added){
            this.items.push(newItem);
        }
    }
    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty.";
        }
        return this.items.shift();
    }
    isEmpty(){
        return this.items.length === 0;
    }
    front() {
        return this.isEmpty() ? null : this.items[0];
    }
    print() {
         console.log(this.items.map(item=> `${item.element}(${item.priority})`).join("->"))
    }

}
const pq = new PriorityQueue();
pq.enqueue("Patient A", 2);
pq.enqueue("Patient B", 1);
pq.enqueue("Patient C", 3);
pq.print();   // Patient B(1) -> Patient A(2) -> Patient C(3)
console.log(pq.dequeue()); // { element: 'Patient B', priority: 1 }
