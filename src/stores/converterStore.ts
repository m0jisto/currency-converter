import { makeAutoObservable } from 'mobx';
import { cryptoStore } from '.';

import { TSelectCoin } from '../types';

export default class ConverterStore {
	constructor() {
		makeAutoObservable(this);
	}

	private selectedFirstCoin: TSelectCoin = {
		name: '',
		price: 0,
		value: '',
	};

	private selectedSecondCoin: TSelectCoin = {
		name: '',
		price: 0,
		value: '',
	};

	get getSelectedCoin() {
		return {
			firstSelect: this.selectedFirstCoin,
			secondSelect: this.selectedSecondCoin,
		};
	}

	newCoin = (name: string): TSelectCoin => ({
		name: name,
		price: cryptoStore!.getAllItems.items.find((item) => item.name === name)!.price,
		value: '',
	});

	transferCoin = (): number =>
		(this.selectedFirstCoin.price * +this.selectedFirstCoin.value) / this.selectedSecondCoin.price;

	setSelectedFirstCoin = (name: string): void => {
		this.selectedFirstCoin = this.newCoin(name);
		this.selectedSecondCoin.value = '';
	};
	setSelectedSecondCoin = (name: string): void => {
		this.selectedSecondCoin = this.newCoin(name);
		this.selectedFirstCoin.value = '';
	};

	setValue = (newValue: string): void => {
		this.selectedFirstCoin.value = newValue;
		this.selectedSecondCoin.value = this.transferCoin().toString();
	};
}
