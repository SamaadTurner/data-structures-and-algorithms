class Node {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(node, cost) {
    this.node = node;
    this.cost = cost;
  }
}

class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(city) {
    if (!this.nodes.has(city)) {
      this.nodes.set(city, []);
    }
  }

  addEdge(startCity, endCity, cost) {
    const startNodeEdges = this.nodes.get(startCity);
    const endNode = this.nodes.get(endCity);

    if (!startNodeEdges || !endNode) {
      throw new Error('Invalid cities');
    }

    startNodeEdges.push(new Edge(new Node(endCity), cost));
  }

}

function businessTrip(graph, itinerary) {
  let totalCost = 0;
  for (let i = 0; i < itinerary.length - 1; i++) {
    const startCity = itinerary[i];
    const endCity = itinerary[i + 1];
    const edges = graph.nodes.get(startCity);

    if (!edges) {
      return null;
    }

    const edge = edges.find(edge => edge.node.value === endCity);
    if (!edge) {
      return null;
    }

    totalCost += edge.cost;
  }
  return totalCost;
}

module.exports = { Graph, Node, Edge, businessTrip } ;
