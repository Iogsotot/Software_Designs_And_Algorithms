import { AirEast, ChicagoSprint, PacificParcel } from './index';

export interface IShipperStrategy {
	cost: number;
}

class AirEastShipperStrategy implements IShipperStrategy {
	cost = AirEast.cost;
}

class ChicagoSprintShipperStrategy implements IShipperStrategy {
	cost = ChicagoSprint.cost;
}

class PacificParcelShipperStrategy implements IShipperStrategy {
	cost = PacificParcel.cost;
}

class Shipper {
	shipper: IShipperStrategy;

	constructor(zipCode: string) {
		this.setStrategy(zipCode[0]);
	}

	private setStrategy(zipCode: string) {
		if ([1, 2, 3].includes(+zipCode)) {
			this.shipper = new AirEastShipperStrategy();
		} else if ([4, 5, 6].includes(+zipCode)) {
			this.shipper = new ChicagoSprintShipperStrategy();
		} else if ([7, 8, 9].includes(+zipCode)) {
			this.shipper = new PacificParcelShipperStrategy();
		} else {
			this.shipper = new AirEastShipperStrategy();
		}
	}

	public getCost() { return this.shipper.cost };
}

export default Shipper;