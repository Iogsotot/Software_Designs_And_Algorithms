import { User, Account, Image } from '../../types';
import type { Row } from '../components/Table';

export const dataConverter = (users: User[], accounts: Account[], images: Image[]): Row[] => {
	const rows = [];

	users.forEach((user, index) => {
		rows.push({
			...user,
			...accounts[index],
			...images[index],
		});
	});

	let convertedRows: Row[] = rows.map((userData) => {
		return {
			avatar: userData.url,
			username: userData.username,
			country: userData.country,
			name: userData.name,
			lastPayments: userData.payments[0]?.totalSum || 0,
			posts: userData.posts,
		};
	});

	return convertedRows;
};
