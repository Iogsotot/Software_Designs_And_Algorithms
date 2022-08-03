import { AirEast, ChicagoSprint, PacificParcel } from './index';
import { ShipmentType } from '../Shipment';

export interface IShipperStrategy {
	getLetterCost: (weight: number) => number;
	getPackageCost: (weight: number) => number;
	getOversizedCost: (weight: number) => number;
	getStandardPackageCost: (weight: number) => number;
}

class AirEastShipperStrategy implements IShipperStrategy {
	private baseCost = AirEast.cost;

	getStandardPackageCost(weight: number): number {
		return weight * this.baseCost;
	};

	getLetterCost(weight: number): number {
		return weight * this.baseCost;
	};
	getPackageCost(weight: number): number {
		return weight * 25;
	};
	getOversizedCost(weight: number): number {
		return this.getStandardPackageCost(weight) + 1000;
	};
}

class ChicagoSprintShipperStrategy implements IShipperStrategy {
	private baseCost = ChicagoSprint.cost;

	getStandardPackageCost(weight: number): number {
		return weight * this.baseCost;
	};

	getLetterCost(weight: number): number {
		return weight * this.baseCost;
	};
	getPackageCost(weight: number): number {
		return weight * 20;
	};
	getOversizedCost(weight: number): number {
		return this.getStandardPackageCost(weight);
	};
}

class PacificParcelShipperStrategy implements IShipperStrategy {
	private baseCost = PacificParcel.cost;

	getStandardPackageCost(weight: number): number {
		return weight * this.baseCost;
	};

	getLetterCost(weight: number): number {
		return weight * this.baseCost;
	};
	getPackageCost(weight: number): number {
		return weight * 19;
	};
	getOversizedCost(weight: number): number {
		return this.getStandardPackageCost(weight) + weight * 2;
	};
}

class Shipper {
	shipper: IShipperStrategy;

	constructor(zipCode: string, weight: number) {
		this.setStrategy(zipCode[0]);
	}

	private setStrategy(zipCode: string): void {
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

	public getCost(type: ShipmentType, weight: number): number {
		if (type === ShipmentType.LETTER) {
			return this.shipper.getLetterCost(weight);
		} else if (type === ShipmentType.PACKAGE) {
			return this.shipper.getPackageCost(weight);
		}
		else if (type === ShipmentType.OVERSIZED) {
			return this.shipper.getOversizedCost(weight);
		}
		return this.shipper.getStandardPackageCost(weight);

	};
}

export default Shipper;