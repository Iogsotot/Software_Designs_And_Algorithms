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

	private shortestDistanceNode = (distances, visited) => {
		let shortest: string | null = null;

		for (let node in distances) {
			let currentIsShortest =
				shortest === null || distances[node] < distances[shortest];
			if (currentIsShortest && !visited.includes(node)) {
				shortest = node;
			}
		}
		return shortest;
	};
	// { path: ['4', '1', '3'], distance: 7 }
	public findShortestPath(vertex1: IVertex, vertex2: IVertex) {
		let distance = Infinity;
		let path: null | string[] = [];
		const start = vertex1.key;
		const end = vertex2.key;
		// const allNodesList = this._graph.adjacencyList;
		let visited = [];

		let distances = {};
		distances[end] = 'Infinity';
		distances = Object.assign(distances, this._graph.adjacencyList[start]);

		if (start === end) {
			path = [end];
			distance = 0;
			return { path: path, distance: distance };
		}

		let parents = { endNode: null };
		for (let child in this._graph.adjacencyList[start]) {
			parents[child] = start;
		}

		let node = this.shortestDistanceNode(distances, visited);

		while (node) {
			// find its distance from the start node & its child nodes
			let distance = distances[node];
			let children = this._graph.adjacencyList[node];

			console.log(children);
			// for each of those child nodes
			for (let child in children) {
				// make sure each child node is not the start node
				if (String(child) === String(start)) {
					console.log("don't return to the start node! 🙅");
					continue;
				} else {
					console.log('startNode: ' + start);
					console.log(
						'distance from node ' + parents[node] + ' to node ' + node + ')'
					);
					console.log('previous distance: ' + distances[node]);
					// save the distance from the start node to the child node
					let newdistance = distance + children[child];
					console.log('new distance: ' + newdistance);
					// if there's no recorded distance from the start node to the child node in the distances object
					// or if the recorded distance is shorter than the previously stored distance from the start node to the child node
					// save the distance to the object
					// record the path
					if (!distances[child] || distances[child] > newdistance) {
						distances[child] = newdistance;
						parents[child] = node;
						console.log('distance + parents updated');
					} else {
						console.log('not updating, because a shorter path already exists!');
					}
				}
			}
			// move the node to the visited set
			//@ts-ignore
			visited.push(node);
			node = this.shortestDistanceNode(distances, visited);
		}
		let shortestPath;

		if (distance === Infinity) {
			shortestPath = [];
			return { path: shortestPath, distance: distances[end] };
		} else {
			shortestPath = [end];
		}

		let parent = parents[end];
		while (parent) {
			shortestPath.push(parent);
			parent = parents[parent];
		}
		shortestPath.reverse();
		console.log(distances);

		return { path: shortestPath, distance: distances[end] };
	}

	public findAllShortestPaths(vertex: IVertex): Record<string, IPath> {
		const start = vertex.key;

		const solutions: Record<string, IPath> = {};
		solutions[start] = { distance: 0, path: [start] };

		while (true) {
			let parent = null;
			let nearest = null;
			let distance = Infinity;

			for (const node in solutions) {
				if (!solutions[node]) continue;
				const nodeDistance = solutions[node].distance;
				const adjacentNodes = this._graph.adjacencyList[node];

				for (const adjacentNode in adjacentNodes) {
					if (solutions[adjacentNode]) continue;

					const adjacentNodeDistance =
						adjacentNodes[adjacentNode] + nodeDistance;
					if (adjacentNodeDistance < distance) {
						parent = solutions[node];
						nearest = adjacentNode;
						distance = adjacentNodeDistance;
					}
				}
			}

			if (distance === Infinity) {
				break;
			}

			if (nearest && parent) {
				if (!solutions[nearest]) return solutions[nearest] = { distance: 0, path: [] };
				solutions[nearest].path = parent.path.concat(nearest);
				solutions[nearest].distance = distance;
			}
		}

		return solutions;
	}
}
