import { Edge } from './Edge';
import { IVertex, Vertex } from './Vertex';
import { WeightedGraph, IWeightedGraph } from './WeightedGraph';

const vertex1 = new Vertex('1');
const vertex2 = new Vertex('2');
const vertex3 = new Vertex('3');
const vertex4 = new Vertex('4');

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


console.log(graph);
