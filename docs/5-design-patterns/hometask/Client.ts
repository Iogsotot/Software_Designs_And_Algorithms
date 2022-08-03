import Shipment, { IShipmentData } from './Shipment';
import { IShipperStrategy } from './Shippers';

interface IClient {
	sendShipmentRequest: (data: IShipmentData) => Shipment;
}
class Client implements IClient {
	private ShipmentStrategy: IShipperStrategy;

	private setShipmentStrategy(s: IShipperStrategy) {
		this.ShipmentStrategy = s;
	}

	public sendShipmentRequest(data: IShipmentData): Shipment {
		return new Shipment(data)
	}

}

export default Client;