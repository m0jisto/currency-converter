import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

interface TConverterBlock {
	classes: any;
}

const ConverterBlock: React.FC<TConverterBlock> = ({ classes }) => (
	<Paper className={classes.paper}>
		<div className={classes.cryptoInputBox}>
			<FormControl className={classes.currencyName}>
				<TextField id="standard-basic-1" label="Сумма" />
			</FormControl>
			<FormControl className={classes.currencyType}>
				<InputLabel id="demo-simple-select-label">Валюта</InputLabel>
				<Select labelId="demo-simple-select-label" id="demo-simple-select">
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
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
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
		</div>
	</Paper>
);

export default ConverterBlock;
