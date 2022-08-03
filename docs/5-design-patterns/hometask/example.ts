import Client from './Client';

const data = {
	shipmentId: 1,
	weight: 100,
	fromAddress: 'Anya',
	fromZipCode: '70000', // 5 characters
	toAddress: 'Alexa',
	toZipCode: '10000', // 5 characters
	isFragile: true,
	// isDoNotLeave: true,
	isReturnReceiptRequested: true,
}

const client1 = new Client();
// console.log(client1);

const res = client1.sendShipmentRequest(data);
// console.log(res);

res.ship();

