import { MyNode, INode } from './MyNode';

export class PriorityQueue {
	private queue: INode[]

	constructor() {
		this.queue = [];
	}

	// 	- `INSERT(S, x)` inserts the element `x` into the set `S`.
	public insert(element: INode) {
		// добавить: проверка на уникальность
		this.queue.push(element);
		// console.log(this.queue);
		this.sortQueue();

		return this.queue;
	};

	// отсортировать значения по ключу priority и по очереди вхождения (0 индекс - самый большой приоритет)
	private sortQueue() {
		// const unsortedQueue = [...this.queue];   // артефакты для дебага
		// console.log(unsortedQueue);							// артефакты для дебага

		this.queue.sort((a, b) => (a.priority + this.queue.indexOf(a)) > (b.priority + this.queue.indexOf(b)) ? 1 : -1);
	}

	// - `MAXIMUM(S)` returns the element of `S` with the largest key.
	public maximum() {
		const maximum = this.queue.slice(-1);
		// console.log({ maximum })					// артефакты для дебага
		return maximum;
	}

	// - `EXTRACT-MAX(S)` removes and returns the element of `S` with the largest key.
	public extractMax() {
		const max = this.queue.pop();
		// console.log({ max });     // артефакты для дебага
		return max;
	}

	// - `INCREASE-KEY(S, x, k)` increases the value of element `x`s key to the new value `k`, which is assumed to be at least as large as `x`s current key value.
	//                           увеличивает(меняет) значение элемента по ключу(приоритету) `x` на новое значение `k`(k >=  x.currentPriority)
	public increaseKey(value: string, newPriority: number) {
		// const queueBefore = [...this.queue];     // артефакты для дебага

		const currentTask = this.queue.find(node => node.value === value);
		if (currentTask?.priority === undefined) return;
		if (currentTask?.priority > newPriority) return;

		const taskIndex = this.queue.findIndex(object => {
			return object.value === value;
		});
		this.queue[taskIndex] = { value: value, priority: newPriority };

		// const queueAfter = [...this.queue];   // артефакты для дебага

		this.sortQueue();
		// console.log('1:', queueBefore);       // артефакты для дебага
		// console.log('2:', queueAfter);      	// артефакты для дебага
		// console.log('3:', this.queue);				// артефакты для дебага

		return this.queue;
	}

	public printQueue() {
		console.log(this.queue)
		return this.queue;
	}

}
