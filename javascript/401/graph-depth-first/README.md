# Depth-first:

The program defines a JavaScript class called Graph that facilitates the creation and manipulation of a graph data structure. It supports adding vertices and edges to the graph, as well as performing a depth-first traversal in pre-order, which systematically visits and returns the vertices in the graph. The class uses an adjacency list to represent the connections between vertices and ensures proper error handling by throwing an exception if the start node for traversal is not found in the graph. The program is designed to provide a foundation for graph-related operations and can be used for various graph-based algorithms and applications.

## Approach and Efficiency:

Time Complexity:
addVertex(vertex): O(1) - Adding a vertex involves a simple dictionary key insertion, which is a constant-time operation.
addEdge(src, dest): O(1) - Adding an edge also involves appending to an array in the adjacency list, which is a constant-time operation.
depthFirstPreOrder(start): O(V + E), where V is the number of vertices, and E is the number of edges. This is the time complexity of depth-first traversal in a graph. In the worst case, we visit all vertices (V) and edges (E) once.
Space Complexity:
The space complexity of the Graph class is O(V + E), where V is the number of vertices, and E is the number of edges. This is primarily due to the adjacency list, which stores information about the vertices and their connections.
In the depthFirstPreOrder method, the space complexity is also O(V) because of the auxiliary data structures used (stack, result array, and visited object), where V is the number of vertices.  

# How to run:

install all dependency, then npm start.

