`use strict`;

const { Graph, graph } = require(`../index.js`);

describe (`Graphs`, () => {

  it(`Node can be successfully added to the graph`, () => {
    let newGraph = new Graph();
    const A = newGraph.addVertex('A');

    expect(A).toBeTruthy();
  });

  it(`An edge can be successfully added to the graph`, () => {
    let newGraph = new Graph();
    const A = newGraph.addVertex('A');
    const B = newGraph.addVertex('B');

    newGraph.addDirectedEdge(A, B);

    expect(newGraph.getNeighbors(A)).toEqual([{'vertex': {'value': 'B'}, 'weight': 0}]);
  });

  it(`A collection of all nodes can be properly retrieved from the graph`, () => {
    let newGraph = new Graph();
    const A = newGraph.addVertex('A');
    const B = newGraph.addVertex('B');

    expect(newGraph.getVertices()).toEqual([{'value': 'A'}, {'value': 'B'}]);
  });

  it(`All appropriate neighbors can be retrieved from the graph`, () => {
    let newGraph = new Graph();
    const A = newGraph.addVertex('A');
    const B = newGraph.addVertex('B');

    newGraph.addDirectedEdge(A, B);

    expect(newGraph.getNeighbors(A)).toEqual([{'vertex': {'value': 'B'}, 'weight': 0}]);
  });

  it(`Neighbors are returned with the weight between nodes included`, () => {
    let newGraph = new Graph();
    const A = newGraph.addVertex('A');
    const B = newGraph.addVertex('B');

    newGraph.addDirectedEdge(A, B, 10);

    expect(newGraph.getNeighbors(A)).toEqual([{'vertex': {'value': 'B'}, 'weight': 10}]);
  });

  it(`The proper size is returned, representing the number of nodes in the graph`, () => {
    let newGraph = new Graph();
    const A = newGraph.addVertex('A');
    const B = newGraph.addVertex('B');

    expect(newGraph.size()).toEqual(2);
  });

  it(`A graph with only one node and edge can be properly returned`, () => {
    let newGraph = new Graph();
    const A = newGraph.addVertex('A');

    newGraph.addDirectedEdge(A, A);

    expect(newGraph.getNeighbors(A)).toEqual([{'vertex': {'value': 'A'}, 'weight': 0}]);
  });

});
