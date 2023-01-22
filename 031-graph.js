// A graph is a data structure that consists of a set of vertices (also known as nodes) and a set of edges connecting these vertices. The vertices represent the entities in the problem domain, and the edges represent the relationships between them. Graphs can be used to model a wide variety of real-world problems, such as social networks, transportation systems, and computer networks.

// There are two main types of graphs:
// A directed graph, also known as a digraph, is a graph in which the edges have a direction, i.e., they go from one vertex to another. These edges are also called arcs.
// An undirected graph is a graph in which the edges do not have a direction, i.e., they connect two vertices in both directions.

// Graphs are widely used in computer science, mathematical and natural sciences, engineering, and many other fields. They are used to represent and analyze complex systems and to solve problems like the shortest path, the traveling salesman problem, and network flow.

// There are several ways to represent a graph in computer science, including:
// Adjacency Matrix: A two-dimensional matrix is used to represent a graph, with the rows and columns representing the vertices of the graph, and the entries in the matrix representing the edges between the vertices. If an edge exists between two vertices, the corresponding entry in the matrix will be set to 1 (or the weight of the edge, if the graph is weighted). This representation is useful for dense graphs, where a large number of edges exist between the vertices.
// Adjacency List: Instead of a matrix, a list is used to represent the edges for each vertex. Each vertex in the graph is associated with a list of the vertices it is connected to. This representation is useful for sparse graphs, where there are relatively few edges compared to the number of vertices.
// Incidence Matrix: A matrix is used to represent a graph, with the rows representing the vertices and the columns representing the edges. The entry in the matrix is 1 if the vertex is the starting or ending point of the corresponding edge. This representation is useful for bipartite graphs and planar graphs.
// Object-oriented: the vertices are represented by objects and the edges are represented by references to the vertices. This is the most flexible representation, but also the most memory-intensive.

// Adjacency matrix representation: (if edges is exist or not, linear)
const matrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

// console.log(matrix[0][0]);

// Adjacency list representation: (if edges is exist, constant)
adjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};

// console.log(adjacencyList["C"]);

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set(); // You can use [], but set is more efficient
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  // time depends on the list
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return null;
    } else {
      for (let adjacentVertex of this.adjacencyList[vertex]) {
        this.removeEdge(vertex, adjacentVertex);
      }

      delete this.adjacencyList[vertex];
    }
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " --> " + [...this.adjacencyList[vertex]]);
    }
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

graph.display();
console.log(graph.hasEdge("A", "C"));
// graph.removeEdge("A", "B");
graph.removeVertex("A");
graph.display();
