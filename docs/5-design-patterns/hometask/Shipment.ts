const costCentPerOunce = 39;

interface IShipment {
	shipmentId: number;
	weight: number;
	fromAddress: string;
	fromZipCode: string; // 5 characters
	toAddress: string;
	toZipCode: string;   // 5 characters
}
class Shipment implements IShipment {

	private shipmentId: number = 1;
	weight: number;
	fromAddress: string;
	fromZipCode: string; 
	toAddress: string;
	toZipCode: string;   

	constructor(weight: number = 0, fromAddress: string, fromZipCode: string, toAddress: string, toZipCode: string) {
		this.weight = weight;
		this.fromAddress = fromAddress;
		this.fromZipCode = fromZipCode;
		this.toAddress = toAddress;
		this.toZipCode = toZipCode
	}

	getInstance() { };

	getShipmentId(): number {
		return this.shipmentId += 1;
	};

	ship(): string {
		const res = `ID: ${this.shipmentId}, from: ${this.fromAddress}, to: ${this.toAddress}, cost: ${this.getCost()}`
		return res;
	}; // singleton

	getCost(): string {
		const cost = this.weight * costCentPerOunce;
		return cost.toString();
	}
}