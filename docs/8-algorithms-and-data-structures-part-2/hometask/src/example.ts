import { PriorityQueue } from './PriorityQueue';

function randomIntFromInterval(min: number, max: number) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const prQueue = new PriorityQueue;

const tasks = ['apple', 'milk', 'orange', 'chocolate', 'tea']


// засетить рандомно
for (let i = 0; i < tasks.length; i++) {
	prQueue.insert({
		value: tasks[i],
		priority: randomIntFromInterval(0, 10)
	})
}

prQueue.printQueue()  // выведет отсортированную по приоритету очередь


// prQueue.extractMax()  // покажет элемент с большим ключом и удалит его
// prQueue.printQueue()

// prQueue.maximum()     // покажет элемент с большим ключом
// prQueue.printQueue()

// prQueue.increaseKey('milk', 10)   // заменит приоритет и пересоберет очередь
// prQueue.printQueue()