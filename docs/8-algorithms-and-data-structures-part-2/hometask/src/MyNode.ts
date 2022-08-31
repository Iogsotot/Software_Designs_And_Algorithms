export interface INode {
	value: any;
	priority: number;
}

export class MyNode implements INode {
	value: any;
	priority: number;

	constructor(value: any, priority: number) {
		this.value = value;
		this.priority = priority;
	}
}
