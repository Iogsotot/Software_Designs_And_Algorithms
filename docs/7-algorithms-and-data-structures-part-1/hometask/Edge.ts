import { IVertex } from './Vertex';

export interface IEdge {
	from: IVertex;
	to: IVertex;
	weight: number;
}

export class Edge implements IEdge {
	public from: IVertex;
	public to: IVertex;
	public weight: number;

	constructor(from: IVertex, to: IVertex, weight: number) {
		this.from = from;
		this.to = to;
		this.weight = weight;
	}
}
