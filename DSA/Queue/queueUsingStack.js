class QueueUsingStack{
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    enqueue(x){
        this.stack1.push(x);

    }
    dequeue(){
        if(this.isEmpty()) return "Queue is Empty";
        if(this.stack2.length === 0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop());
            }
        }
            return this.stack2.pop();
    }
    peek(){
        if(this.isEmpty()) return null;
        if(this.stack2.length === 0){
            while(this.stack1.length >0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length -1];

    }
    isEmpty(){
        return this.stack1.length ===0 && this.stack2.length=== 0;
    }
    size() {
        return this.stack1.length + this.stack2.length;
    }
    print(){
        const s2= [...this.stack2].reverse();
        const s1= [...this.stack1];
        console.log('Front ->' +[...s2,...s1].join('<-'),'<-Rear');

    }
}

const q = new QueueUsingStack();

q.enqueue("vishnu");
q.enqueue("arun");
q.enqueue("priya");

q.print();              // Front -> vishnu <- arun <- priya <- Rear
console.log(q.dequeue()); // vishnu
console.log(q.peek());    // arun
q.enqueue('aswanth')
q.enqueue('Gowri')
q.print();              // Front -> arun <- priya <- Rear
