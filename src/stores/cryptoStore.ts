import axios from 'axios';
import { makeAutoObservable } from 'mobx';
import { converterStore } from '.';
import { TCoin, TDiffCoin } from '../types';
export default class CryptoStore {
	private items: TCoin[] = [];
	private diffItems: TDiffCoin = {};

	constructor() {
		makeAutoObservable(this);
	}

	get getAllItems() {
		return {
			items: this.items,
			diffItems: this.diffItems,
		};
	}

	isEqualObject = (prevObj: TCoin[], nextObj: TCoin[]): boolean =>
		JSON.stringify(prevObj) !== JSON.stringify(nextObj);

	comparisonItems = (prevItem: TCoin, nextItem: TCoin): string => {
		if (prevItem.price > nextItem.price) {
			return 'columnDown';
		} else if (prevItem.price < nextItem.price) {
			return 'columnUp';
		}

		return '';
	};

	setAllItems = (newItems: TCoin[]): void => {
		if (this.isEqualObject(this.items, newItems)) {
			this.diffItems = this.items.reduce((diffObj: TDiffCoin, item, index) => {
				diffObj[item.name] = this.comparisonItems(item, newItems[index]);

				return diffObj;
			}, {});
			this.items = newItems;
			converterStore.setSelectedFirstCoin(newItems[0].name);
			converterStore.setSelectedSecondCoin(newItems[1].name);
			setTimeout(() => (this.diffItems = {}), 5000);
		}
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
				this.setAllItems(coins);
			});
	};
}
