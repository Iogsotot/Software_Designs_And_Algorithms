import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
	private id: number;
	private value: number;
	private name: string;
	private weight: number;

	public constructor(name: string, value: number, weight: number) {
		this.id = id;
		this.value = value;
		this.weight = weight;
		this.name = name;

		id += 1;
	}

	public compareTo(other: Item): number {
		if (this.value !== other.value) {
			return this.value > other.value ? 1 : -1;
		}

		return this.name.localeCompare(other.name, undefined, { sensitivity: 'accent' });
	}

	public toString(): string {
		return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
	}

	static reset(): void {
		id = 0;
	}
}
