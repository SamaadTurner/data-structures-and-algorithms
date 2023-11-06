`use strict`;

const { Graph } = require(`../index.js`);

describe (`Graph Traversal`, () => {

  it(`breadthFirst traversal`, () => {
    let newGraph = new Graph();
    const A = newGraph.addVertex('A');

    expect(newGraph.breadthFirst(A)).toBeTruthy();
  });

});
