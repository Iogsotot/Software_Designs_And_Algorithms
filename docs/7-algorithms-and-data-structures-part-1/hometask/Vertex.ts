export interface IVertex {
	key: string;
}

export class Vertex implements IVertex {
	public key: string;

	constructor(key: string) {
		this.key = key;
	}
}
