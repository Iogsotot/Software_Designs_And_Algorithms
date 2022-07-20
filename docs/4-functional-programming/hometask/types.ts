export interface Image {
	userID: string;
	url: string;
}

export interface User {
	userID: string;
	username: string;
	country: string;
	name: string;
}

interface Payment {
	totalSum: number;
	date: string;
}

export interface Account {
	userID: string;
	posts: number;
	payments: Payment[];
}

export type SortingByPaymentsOrder = 'asc' | 'desc';

export const enum FilterByPostsValue {
	moreThan100 = 'More than 100 posts',
	withoutPosts = 'Without posts',
}

export interface Selected {
	filters?: FilterByPostsValue[];
	searchValue?: string;
	sortingOrder?: SortingByPaymentsOrder;
}
