class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.values.sort((a, b) => a.priority - b.priority);
  }
  dequeue() {
    return this.values.shift();
  }
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight }); // undirected
  }

  dijkstra(start, finish) {
    const distances = {};
    const pq = new PriorityQueue();
    const previous = {};
    let path = []; // to return shortest path
    let smallest;

    // initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        pq.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        pq.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // algorithm
    while (pq.values.length) {
      smallest = pq.dequeue().val;
      if (smallest === finish) {
        // build path
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        return path.concat(smallest).reverse();
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor of this.adjacencyList[smallest]) {
          let candidate = distances[smallest] + neighbor.weight;
          if (candidate < distances[neighbor.node]) {
            distances[neighbor.node] = candidate;
            previous[neighbor.node] = smallest;
            pq.enqueue(neighbor.node, candidate);
          }
        }
      }
    }
  }
}

// Example usage
let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("C", "D", 1);
g.addEdge("B", "D", 5);

console.log(g.dijkstra("A", "D")); // [ 'A', 'C', 'D' ]
