import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import { TCoin } from './types';
import { CryptoTable, ConverterBlock } from './components';

import useStyles from './styles';

const App: React.FC = () => {
	const classes = useStyles();
	const [allCoins, setAllCoins] = useState<TCoin[]>([]);

	useEffect(() => {
		axios
			.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
			.then(({ data: { Data } }) => {
				setAllCoins(
					Data.map((coin: any) => {
						const obj: TCoin = {
							name: coin.CoinInfo.Name,
							fullName: coin.CoinInfo.FullName,
							imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
							price: coin.RAW.USD.PRICE.toFixed(2),
							volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
						};
						return obj;
					}),
				);
			});
	}, []);

	return (
		<Container className={classes.root} fixed>
			<CssBaseline />
			<Grid container spacing={3}>
				<Grid item xs={8}>
					<CryptoTable coins={allCoins} classes={classes} />
				</Grid>
				<Grid item xs={4}>
					<ConverterBlock classes={classes} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default App;
