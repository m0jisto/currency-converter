import axios from 'axios';
import { makeAutoObservable } from 'mobx';
import { TCoin } from '../types';

export default class CryptoStore {
	constructor() {
		makeAutoObservable(this);
	}

	public items: TCoin[] = [];

	get getItems() {
		return this.items;
	}

	setItems = (items: TCoin[]): void => {
		this.items = items;
	};

	fetchCoins = (): void => {
		axios
			.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
			.then(({ data: { Data } }) => {
				const coins: TCoin[] = Data.map((coin: any) => {
					const obj: TCoin = {
						name: coin.CoinInfo.Name,
						fullName: coin.CoinInfo.FullName,
						imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
						price: coin.RAW.USD.PRICE.toFixed(2),
						volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
					};
					return obj;
				});

				this.setItems(coins);
			});
	};
}
