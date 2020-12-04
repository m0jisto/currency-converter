import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { TCoin } from '../types';
import { observer } from 'mobx-react-lite';
import { cryptoStore } from '../stores';

interface ICryptoTable {
	classes: any;
}

const CryptoTable: React.FC<ICryptoTable> = observer(({ classes }) => {
	const items = cryptoStore!.getItems;

	React.useEffect(() => {
		cryptoStore!.fetchCoins();
	}, []);

	return (
		<Paper className={classes.paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell />
						<TableCell align="left">Name</TableCell>
						<TableCell align="left">Full Name</TableCell>
						<TableCell align="left">Price</TableCell>
						<TableCell align="left">Volume 24 hours</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{items.map((coin: TCoin) => (
						<TableRow key={coin.name}>
							<TableCell align="left">
								<img className={classes.cryptoIcon} src={coin.imageUrl} alt="icon_coin" />
							</TableCell>
							<TableCell align="left">{coin.name}</TableCell>
							<TableCell align="left">{coin.fullName}</TableCell>
							<TableCell align="left">$ {coin.price}</TableCell>
							<TableCell align="left">$ {coin.volume24Hour}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Paper>
	);
});

export default CryptoTable;
