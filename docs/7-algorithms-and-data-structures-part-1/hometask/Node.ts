interface INode {
	val: any;
	priority: number;
}

export class Node implements INode {
	val: any;
	priority: number;

	constructor(val: any, priority: number) {
		this.val = val;
		this.priority = priority;
	}
}
