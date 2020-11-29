import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			padding: theme.spacing(10),
		},
		paper: {
			padding: theme.spacing(4),
			textAlign: 'center',
			color: theme.palette.text.secondary,
		},
		cryptoInputBox: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			margin: '10px 0 20px',
		},
		currencyName: {
			minWidth: '50%',
		},
		currencyType: {
			minWidth: '30%',
		},
	}),
);

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];

type TCoin = {
	name: string;
	fullName: string;
	imageUrl: string;
	price: number;
	volume24Hour: number;
};

const App: React.FC = () => {
	const classes = useStyles();
	const [allCoins, setAllCoins] = useState<TCoin[] | null>([]);

	useEffect(() => {
		axios
			.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
			.then(({ data: { Data } }) => {
				console.log(Data);
				setAllCoins(Data);
			});
	}, []);

	return (
		<Container className={classes.root} fixed>
			<CssBaseline />
			<Grid container spacing={3}>
				<Grid item xs={8}>
					<Paper>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Dessert (100g serving)</TableCell>
									<TableCell align="right">Calories</TableCell>
									<TableCell align="right">Fat&nbsp;(g)</TableCell>
									<TableCell align="right">Carbs&nbsp;(g)</TableCell>
									<TableCell align="right">Protein&nbsp;(g)</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{allCoins &&
									allCoins.map((coin) => (
										<TableRow key={coin.name}>
											<TableCell component="th" scope="row">
												{coin.name}
											</TableCell>
											<TableCell align="right">{coin.fullName}</TableCell>
											<TableCell align="right">{coin.imageUrl}</TableCell>
											<TableCell align="right">{coin.price}</TableCell>
											<TableCell align="right">{coin.volume24Hour}</TableCell>
										</TableRow>
									))}
							</TableBody>
						</Table>
					</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper className={classes.paper}>
						<div className={classes.cryptoInputBox}>
							<FormControl className={classes.currencyName}>
								<TextField id="standard-basic-1" label="Сумма" />
							</FormControl>
							<FormControl className={classes.currencyType}>
								<InputLabel id="demo-simple-select-label">Валюта</InputLabel>
								<Select labelId="demo-simple-select-label" id="demo-simple-select">
									<MenuItem value="">Ten</MenuItem>
									<MenuItem value="">Twenty</MenuItem>
									<MenuItem value="">Thirty</MenuItem>
								</Select>
							</FormControl>
						</div>

						<div className={classes.cryptoInputBox}>
							<FormControl className={classes.currencyName}>
								<TextField id="standard-basic-2" label="Сумма" />
							</FormControl>
							<FormControl className={classes.currencyType}>
								<InputLabel id="demo-simple-select-label">Валюта</InputLabel>
								<Select labelId="demo-simple-select-label" id="demo-simple-select">
									<MenuItem value="">Ten</MenuItem>
									<MenuItem value="">Twenty</MenuItem>
									<MenuItem value="">Thirty</MenuItem>
								</Select>
							</FormControl>
						</div>

						<Typography variant="h5" component="h5">
							76,08 Российский рубль
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default App;
