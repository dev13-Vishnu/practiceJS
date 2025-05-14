class Graph{
    constructor() {
        this.adjacencyList ={};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1,vertex2){
        this.addVertex(vertex1)
        this.addVertex(vertex2)
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }
    display() {
        for(let vertex in this.adjacencyList) {
            console.log(vertex + '->' + this.adjacencyList[vertex].join(', '));
        }
    }
    removeEdges(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v=> v != vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v=> v != vertex1);
    }
    removeVertex(vertex) {
        while(this.adjacencyList[vertex]?.length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdges(vertex,adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
}

const graph = new Graph();

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

graph.display();

/*
Output:
A -> B, C
B -> A, D
C -> A, D
D -> B, C
*/
