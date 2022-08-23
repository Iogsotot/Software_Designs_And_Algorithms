import { Dijkstra, IDijkstra } from './Dijkstra';
import { IVertex } from './Vertex';

const graph = 'graph';

const dijkstra: IDijkstra = new Dijkstra(graph);

dijkstra.findShortestPath(vertex4, vertex3); // { path: ['4', '1', '3'], distance: 7 }
dijkstra.findShortestPath(vertex1, vertex5); // { path: [], distance: Infinity }
dijkstra.findShortestPath(vertex1, vertex1); // { path: ['1'], distance: 0 }

dijkstra.findAllShortestPaths(vertex4);
/*
   {
     '1': { path: ['4', '1'], distance: 3 },
     '2': { path: ['4', '2'], distance: 6 },
     '3': { path: ['4', '1', '3'], distance: 7 },
     '5': { path: [], distance: Infinity }
   }
  */
