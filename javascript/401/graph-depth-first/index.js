class Graph {
  constructor() {
    // Initialize an empty adjacency list.
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    // Add a vertex to the adjacency list if it doesn't exist.
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(src, dest) {
    // Add an edge between source and destination vertices.
    this.adjacencyList[src].push(dest);
  }

  depthFirstPreOrder(start) {
    // Initialize a stack, result array, and visited object.
    const stack = [start];
    const result = [];
    const visited = {};

    // Mark the start node as visited and check if it exists in the adjacency list.
    visited[start] = true;
    if (!this.adjacencyList[start]) {
      throw new Error('Start node not found');
    }

    // Perform Depth-First Search in pre-order.
    while (stack.length) {
      const current = stack.pop();
      result.push(current);

      // Iterate through neighbors and push unvisited neighbors onto the stack.
      const neighbors = this.adjacencyList[current];
      for (let i = neighbors.length - 1; i >= 0; i--) {
        const neighbor = neighbors[i];
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      }
    }

    return result;
  }
}

module.exports = Graph;

