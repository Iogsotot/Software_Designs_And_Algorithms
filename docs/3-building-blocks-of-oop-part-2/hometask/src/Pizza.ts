import { Consumable } from './Consumable';

export class Pizza extends Consumable {
	private numberOfSlices: number = 0;
	private slicesEaten: number = 0;

	constructor(numberOfSlices: number, spoiled: boolean, value: number = 0, weight: number = 0) {
		super('pizza', value, weight, spoiled);

		this.numberOfSlices = numberOfSlices;
	}

	public eat(): string {
		const baseMsg = 'You eat a slice of the pizza.';
		const additionalMsg = 'You ate all the pizza.';
		const noPizzaMsg = 'There is no pizza. There is nothing to eat.';
		let msg = '';

		if (this.slicesEaten < this.numberOfSlices) {
			this.slicesEaten++;
			msg = baseMsg;

			if (this.slicesEaten >= this.numberOfSlices) {
				this.setConsumed(true);
				msg += ` ${additionalMsg}`;
			}

			return msg;
		} 

		return noPizzaMsg;
	}
}
