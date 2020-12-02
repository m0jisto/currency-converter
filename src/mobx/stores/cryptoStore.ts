import { observable, computed, action } from 'mobx';
import { TCoin } from '../../types';

export default class CryptoStore {
	@observable public items: TCoin[] = [];

	@computed
	get getItems() {
		return this.items;
	}

	@action
	setItems = (items: TCoin[]): void => {
		this.items = items;
	};
}
