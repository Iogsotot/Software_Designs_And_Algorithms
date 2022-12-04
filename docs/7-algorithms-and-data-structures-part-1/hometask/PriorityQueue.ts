import { Node } from './Node';

export class PriorityQueue {
	private values;

	constructor() {
		this.values = [];
	}

	enqueue(value, priority) {
		let node = new Node(value, priority);
		this.values.push(node);
		this.bubbleUp();
		return this.values;
	}

	bubbleUp() {
		let idx = this.values.length - 1;
		const element = this.values[idx];

		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.values[parentIdx];

			if (element.priority <= parent.priority) break;
			if (element.priority > parent.priority) {
				this.values[parentIdx] = element;
				this.values[idx] = parent;
				idx = parentIdx;
			}
		}
	}

	dequeue() {
		if (this.values.length === 1) {
			return this.values.pop();
		}

		let max = this.values[0];
		let end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}
		return max;
	}

	sinkDown() {
		let idx = 0;
		const length = this.values.length;
		const element = this.values[0];

		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild;
			let rightChild;
			let swap: number | null = null;
			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild.priority < element.priority) {
					swap = leftChild;
				}
			}

			if (rightChild < length) {
				rightChild = this.values[rightChildIdx];
				if (
					(!swap && rightChild.priority < element.priority) ||
					(swap && rightChild.priority < leftChild.priority)
				) {
					swap = rightChildIdx;
				}
			}

			if (!swap) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
	}
}
