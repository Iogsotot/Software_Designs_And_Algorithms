import { Shipper } from './Shippers';

const costCentPerOunce = 39;

export interface IShipment {
	getInstance: () => Shipment;
	getShipmentId: () => number;
	ship: () => string;
}

export interface IShipmentData {
	shipmentId: number;
	weight: number;
	fromAddress: string;
	fromZipCode: string; // 5 characters
	toAddress: string;
	toZipCode: string; // 5 characters
	isFragile?: boolean;
	isDoNotLeave?: boolean;
	isReturnReceiptRequested?: boolean;
}


export const enum ShipmentType {
	LETTER = 'letter',
	PACKAGE = 'package',
	OVERSIZED = 'oversized',
}

function shipmentDecorator<TFunction extends Function>(target: TFunction): TFunction {
	let newConstructor: Function = function (data) {
		const [isFragile, isDoNotLeave, isReturnReceiptRequested] = data;
		this.ship = function (): void {
			if (isFragile)
				console.log('**MARK FRAGILE**');
			if (isDoNotLeave)
				console.log('**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**');
			if (isReturnReceiptRequested)
				console.log('**MARK RETURN RECEIPT REQUESTED**');
		}
	}
	return <TFunction>newConstructor;
}

@shipmentDecorator
class Shipment implements IShipment {

	private shipmentId: number = 1;
	private weight: number;
	private fromAddress: string;
	private fromZipCode: string; // 5 characters
	private toAddress: string;
	private toZipCode: string; // 5 characters

	constructor(data: IShipmentData) {
		this.shipmentId = data.shipmentId;
		this.weight = data.weight ?? 0;
		this.fromAddress = data.fromAddress;
		this.fromZipCode = data.fromZipCode;
		this.toAddress = data.toAddress;
		this.toZipCode = data.toZipCode
	}

	private getCost(): string {
		const shipper = new Shipper(this.fromZipCode, this.weight);

		let cost = this.weight * costCentPerOunce;

		if (this.weight <= 15) {
			cost = shipper.getCost(ShipmentType.LETTER, this.weight);
		}
		else if (this.weight <= 160) {
			cost = shipper.getCost(ShipmentType.PACKAGE, this.weight);
		}
		else if (this.weight > 160) {
			cost = shipper.getCost(ShipmentType.OVERSIZED, this.weight);
		}

		return cost.toString();
	}

	public getInstance(): Shipment {
		return this;
	};

	public getShipmentId(): number {
		return this.shipmentId += 1;
	};

	public ship(): string {
		const res = `ID: ${this.shipmentId}, from: ${this.fromAddress}, to: ${this.toAddress}, cost: ${this.getCost()}`
		return res;
	};

}

export default Shipment;