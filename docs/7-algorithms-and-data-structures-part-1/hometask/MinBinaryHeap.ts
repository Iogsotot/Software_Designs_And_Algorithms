class MinBinaryHeap {
	private values;

	constructor() {
		this.values = [];
	}

	enqueue(element) {
		this.values.push(element);
		this.bubbleUp();
	}

	bubbleUp() {
		//Reference 'new' Element
		let idx = this.values.length - 1;
		const element = this.values[idx];

		//while the index is NOT the top of the heap
		while (idx > 0) {
			// if the child element is greater/equal to the parent, exit the loop
			//Find 'parent' element
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.values[parentIdx];

			if (element <= parent) break;
			// else, swap parent and child and reassign the 'new' element's index to be what the parent's was.
			if (element > parent) {
				this.values[parentIdx] = element;
				this.values[idx] = parent;
				idx = parentIdx;
			}
		}
	}

	dequeue() {
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
		const length = this.values.length; // Easier to reference length
		const element = this.values[0];

		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild;
			let rightChild;
			let swap: number | null = null;
			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild < element) {
					swap = leftChild;
				}
			}

			if (rightChild < length) {
				rightChild = this.values[rightChildIdx];
				if (
					(!swap && rightChild < element) ||
					(swap && rightChild < leftChild)
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
