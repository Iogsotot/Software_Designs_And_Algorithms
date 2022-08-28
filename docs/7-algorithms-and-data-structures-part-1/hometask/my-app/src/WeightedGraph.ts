import { IVertex } from './Vertex';

export interface IWeightedGraph<T> {
	addVertex(key: string): void;
	addEdge(vertex1: T, vertex2: T, weight: number): void;
}

interface AdjacencyList {
	[key: string]: { [key: string]: number };
}

export class WeightedGraph implements IWeightedGraph<IVertex> {
	public adjacencyList: AdjacencyList = {};

	public addVertex(key: string): AdjacencyList {
		if (!this.adjacencyList[key]) {
			this.adjacencyList[key] = {};
		}
		return this.adjacencyList;
	}

	public addEdge(vertex1: IVertex, vertex2: IVertex, weight: number): boolean {
		if (
			this.adjacencyList[vertex1.key] &&
			this.adjacencyList[vertex2.key] &&
			vertex1 !== vertex2
		) {
			this.adjacencyList[vertex1.key][vertex2.key] = weight;
			this.adjacencyList[vertex2.key][vertex1.key] = weight;
			return true;
		}
		return false;
	}
}
