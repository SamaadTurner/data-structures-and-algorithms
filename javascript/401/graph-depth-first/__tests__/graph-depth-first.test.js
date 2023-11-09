const Graph = require('../index');

describe('Graph depth-first pre-order traversal', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');
    graph.addVertex('G');
    graph.addVertex('H');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'D');
    graph.addEdge('B', 'C');
    graph.addEdge('B', 'G');
    graph.addEdge('D', 'E');
    graph.addEdge('D', 'H');
    graph.addEdge('E', 'F');
  });

  test('The traversal order should be A, B, C, G, D, E, F, H', () => {
    expect(graph.depthFirstPreOrder('A')).toEqual(['A', 'B', 'C', 'G', 'D', 'E', 'F', 'H']);
  });

  test('The traversal should return an empty array for a graph with no edges', () => {
    const emptyGraph = new Graph();
    emptyGraph.addVertex('A');
    expect(emptyGraph.depthFirstPreOrder('A')).toEqual(['A']);
  });

  test('The traversal should throw an error if the start node does not exist', () => {
    expect(() => {
      graph.depthFirstPreOrder('Z');
    }).toThrow('Start node not found');
  });

});
