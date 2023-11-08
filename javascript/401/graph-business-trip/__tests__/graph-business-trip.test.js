const { Graph, Node, Edge, travelCost } = require('./index');

describe('travelCost', () => {
  let graph;
  beforeEach(() => {
    graph = new Graph();
    graph.addNode('City1');
    graph.addNode('City2');
    graph.addNode('City3');
    graph.addNode('City4');
    graph.addNode('City5');
    graph.addNode('City6');

    graph.addEdge('City1', 'City2', 50);
    graph.addEdge('City1', 'City3', 75);
    graph.addEdge('City1', 'City4', 100);
    graph.addEdge('City2', 'City3', 25);
    graph.addEdge('City2', 'City5', 150);
    graph.addEdge('City3', 'City6', 200);
    graph.addEdge('City4', 'City5', 300);
    graph.addEdge('City5', 'City6', 75);
  });

  test('should return the correct total cost for a simple trip', () => {
    const itinerary = ['City1', 'City2'];
    expect(travelCost(graph, itinerary)).toBe(50);
  });

  test('should return the correct total cost for a longer trip', () => {
    const itinerary = ['City1', 'City3', 'City6'];
    expect(travelCost(graph, itinerary)).toBe(275);
  });

  test('should return null for a trip with no direct connection', () => {
    const itinerary = ['City4', 'City6'];
    expect(travelCost(graph, itinerary)).toBeNull();
  });

  test('should return null for a circular trip with no direct connection', () => {
    const itinerary = ['City2', 'City3', 'City4', 'City5', 'City2'];
    expect(travelCost(graph, itinerary)).toBeNull();
  });

});
