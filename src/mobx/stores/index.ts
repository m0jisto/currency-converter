import ConverterStore from './converterStore';
import CryptoStore from './cryptoStore';

const stores = {
	converterStore: new ConverterStore();
	cryptoStore: new CryptoStore();
};

export default stores;