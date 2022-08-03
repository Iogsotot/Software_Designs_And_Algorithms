import Shipment, { IShipmentData } from './Shipment';

interface IClient {
	sendShipmentRequest: (data: IShipmentData) => Shipment;
}
class Client implements IClient {
	sendShipmentRequest(data: IShipmentData): Shipment {
		return new Shipment(data)
	}
}

export default Client;