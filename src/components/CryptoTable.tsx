import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { TCoin } from '../types';

interface ICryptoTable {
	coins: TCoin[];
	classes: any;
}

const CryptoTable: React.FC<ICryptoTable> = ({ coins, classes }) => (
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
				{coins.map((coin: TCoin) => (
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

export default CryptoTable;
