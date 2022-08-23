//Find the shortest path

import { IVertex } from './Vertex';

interface IPath {
	path: string[];
	distance: number;
}

export interface IDijkstra<T> {
	findShortestPath(vertex1: T, vertex2: T): IPath;
	findAllShortestPaths(vertex: T): Record<string, IPath>;
}

export class Dijkstra implements IDijkstra<IVertex> {
	private _graph;

	constructor(graph) {
		this._graph = graph;
	}

	findShortestPath(vertex1: IVertex, vertex2: IVertex) {
    return {path: [''], distance: 2}
  }
	findAllShortestPaths(vertex: IVertex) {
    
  }
}
