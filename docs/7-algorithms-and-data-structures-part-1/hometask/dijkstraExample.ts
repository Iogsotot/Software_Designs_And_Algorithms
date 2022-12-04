import { Edge } from './Edge';
import { Dijkstra, IDijkstra } from './Dijkstra';
import { IVertex, Vertex } from './Vertex';
import { WeightedGraph, IWeightedGraph } from './WeightedGraph';

const vertex1 = new Vertex('1');
const vertex2 = new Vertex('2');
const vertex3 = new Vertex('3');
const vertex4 = new Vertex('4');
const vertex5 = new Vertex('5');

// nodes
const vertices = [
	new Vertex('1'),
	new Vertex('2'),
	new Vertex('3'),
	new Vertex('4'),
	new Vertex('5'),
];

// connections between modes
const edges = [
	new Edge(vertex1, vertex4, 3),
	new Edge(vertex1, vertex2, 5),
	new Edge(vertex1, vertex3, 4),
	new Edge(vertex2, vertex4, 6),
	new Edge(vertex2, vertex3, 5),
];

const graph: IWeightedGraph<IVertex> = new WeightedGraph();

vertices.forEach((verticle) => graph.addVertex(verticle.key));
edges.forEach((edge) => graph.addEdge(edge.from, edge.to, edge.weight));

const dijkstra: IDijkstra<IVertex> = new Dijkstra(graph);

const res1 = dijkstra.findShortestPath(vertex4, vertex3); // { path: ['4', '1', '3'], distance: 7 }
const res2 = dijkstra.findShortestPath(vertex1, vertex5); // { path: [], distance: Infinity }
const res3 = dijkstra.findShortestPath(vertex1, vertex1); // { path: ['1'], distance: 0 }

const res4 = dijkstra.findAllShortestPaths(vertex4);
/*
   {
     '1': { path: ['4', '1'], distance: 3 },
     '2': { path: ['4', '2'], distance: 6 },
     '3': { path: ['4', '1', '3'], distance: 7 },
     '5': { path: [], distance: Infinity }
   }
  */

// console.log(graph);
console.log(1, res1);
// console.log(2, res2);
// console.log(3, res3);
// console.log(4, res4);
