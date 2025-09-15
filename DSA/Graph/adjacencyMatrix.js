class Graph{
    constructor() {
        this.vertices = [];
        this.matrix = [];
    }
    addVertex (label){
        this.vertices.push(label);
        for(let row of this.matrix){
            row.push(0);
        }
        this.matrix.push(Array(this.vertices.length).fill(0));
    }
    addEdge(v1,v2, weight = 1, directed= false) {
        let i = this.vertices.indexOf(v1);
        let j = this.vertices.indexOf(v2);

        this.matrix [i][j] = weight;
        if(!directed) this.matrix[j][i] = weight;
    }
    getNeighbors(v){
        let idx = this.vertices.indexOf(v);
        let neighbors = [];

        for(let i = 0 ; i < this.vertices.length; i++){
            if(this.matrix[idx][i] !== 0) {
                neighbors.push(this.vertices[i]);
            }
        }
        return neighbors;
    }
    printGraph() {
        console.log("  " + this.vertices.join(" "));
        this.matrix.forEach((row,i) => {
            console.log(this.vertices[i], row.join(" "));
        });
    }
    dfs(start) {
        let visited = new Array(this.vertices.length).fill(false);
        let result = [];

        dfsHelper = (idx) => {
            visited[idx] = true;
            result.push(this.vertices[idx])

            for(let i = 0; i < this.vertices.length; i++){
                if(thisl.matrix[idx][i] !== 0 && !visited){
                    dfsHelper(i);
                }
            }
        }

        const startIndex = this.vertices.indexOf(start);
        dfsHelper(startIndex);
        return result;
    }
    bfs(start){
        let visited = new Array(this.vertices.length).fill(false);
        const result =[];
        const queue = [];

        const startIndex = this.vertices.indexOf(start);
        visited[startIndex] = true;
        queue.push(startIndex);

        while(queue.length > 0){
            let idx = queue.shift();
            result.push(this.vertices[idx]);

            for(let i = 0; i < this.vertices.length; i++) {
                if(this.matrix[idx][i] !== 0 && !visited[i]){
                    visited[i] = true;
                    queue.push(i);
                }
            }
        }
        return result;
    }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("C", "D");

console.log(g.getNeighbors("A")); // ["B", "C"]
console.log(g.getNeighbors("C")); // ["A", "D"]
g.printGraph();