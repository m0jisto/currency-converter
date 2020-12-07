export type TCoin = {
	name: string;
	fullName: string;
	imageUrl: string;
	price: number;
	volume24Hour: number;
};

export type TDiffCoin = {
	[key: string]: string;
};

export type TSelectCoin = {
	name: string;
	price: number;
	value: string;
};
