class Graph{
    constructor(numVertices) {
        this.numVertices = numVertices;
        this.matrix = Array.from({length: numVertices}, () => Array(numVertices).fill(0)
        );
    }
    addEdge(v1,v2, weight = 1, directed= false){
        this.matrix[v1][v2] = weight;
        if(!directed){
            this.matrix[v2][v1] = weight;
        }
    }
    removeEdge(v1,v2, directed = false){
        this.matrix[v1][v2] = 0;
        if(!directed){
            this.matrix[v2][v1] = 0;
        }
    }
    printGraph(){
        console.log("Adjacency Matrix");
        for(let row of this.matrix){
            console.log(row.join(" "));
        }
    }
    addVertex() {
        this.numVertices++;
        for(let row of this.matrix) {
            row.push(0);
        }
        this.matrix.push(Array(this.numVertices).fill(0));
    }
    hasEdge(v1,v2){
        return this.matrix[v1][v2] !== 0;
    }
    getNeighbors(v){
        let neighbors = [];
        for(let i = 0 ; i < this.numVertices; i++) {
            if(this.matrix[v][i] !== 0){
                neighbors.push(i);
            }
        }
        return neighbors;
    }
    degree(v){
        return this.matrix[v].reduce((a,b) => a + (b !== 0? 1: 0), 0);
    }
    inDegree(v){
        let count = 0;
        for(let i = 0; i < this.numVertices; i++){
            if(!this.matrix[i][v] !==0) count++;
        }
        return count;
    }
    outDegree (v) {
        return this.degree(v);
    }
    countEdges(directed = false){
        let count = 0; 
        for(let i  = 0; i < this.numVertices; i ++) {
            for(let j =0 ; j< this.numVertices; j++){
                if(this.matrix[i][j] !==0) count++
            }
        }
        return directed? count: count/2;
    }
    clearGraph() {
        this.matrix = Array.from({length: this.numVertices}, () => Array(this.numVertices).fill(0));
    }
    dfs(start) {
        const visited = new Array(this.numVertices).fill(false);
        const result = [];
        const dfsHleper = (v) => {
             visited[v] = true;
             result.push(v);
             for(let i = 0; i < this.numVertices; i++){
                if(this.matrix[v][i] ==0 && !visited[i]){
                    dfsHleper(i);
                }
             }
        }
        dfsHleper(start)
        return result;
    }
    bfs(start){
        const visited  = new Array(this.numVertices).fill(false);
        const result = [];
        const queue = [start];
        visited[start] = true;
        while(queue.length > 0){
            let v  = queue.shift();
            result.push(v);
            for(let i = 0; i< this.numVertices; i++){
                if(this.matrix[v][i] !== 0 && !visited[i]){
                    visited[i] = true;
                    queue.push(i);
                }
            }
        }
        return result;
    }
}


const g = new Graph(4); // graph with 4 vertices (0,1,2,3)
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 3);

g.printGraph();