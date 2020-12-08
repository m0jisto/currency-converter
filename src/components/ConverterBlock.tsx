import React from 'react';
import { observer } from 'mobx-react-lite';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

import { cryptoStore, converterStore } from '../stores';

interface IConverterBlock {
	classes: any;
}

const ConverterBlock: React.FC<IConverterBlock> = observer(({ classes }) => {
	const { items } = cryptoStore!.getAllItems;
	const { firstSelect, secondSelect } = converterStore.getSelectedCoin;

	const stringIsNumber = (num: string): boolean => isNaN(Number(num));

	const onSelectFirstCoin = (event: any) => converterStore.setSelectedSecondCoin(event.target.value);

	const onSelectSecondCoin = (event: any) => converterStore.setSelectedSecondCoin(event.target.value);

	const onChangeValueCoin = (event: React.ChangeEvent<HTMLInputElement>): void =>
		converterStore.setValue(event.target.value);

	return (
		<Paper className={classes.paper}>
			<div className={classes.cryptoInputBox}>
				<FormControl className={classes.currencyName}>
					<TextField
						id="standard-basic-1"
						label="Сумма"
						value={firstSelect.value}
						onChange={onChangeValueCoin}
					/>
				</FormControl>
				<FormControl className={classes.currencyType}>
					<InputLabel id="demo-simple-select-label-1">Валюта</InputLabel>
					<Select
						id="demo-simple-select-1"
						labelId="demo-simple-select-label-1"
						value={firstSelect.name || ''}
						onChange={onSelectFirstCoin}
					>
						{items.map((item, index) => (
							<MenuItem key={`${item.name}_${index}`} value={item.name}>
								{item.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</div>

			<div className={classes.cryptoInputBox}>
				<FormControl className={classes.currencyName}>
					<TextField
						id="standard-basic-2"
						label="Сумма"
						value={stringIsNumber(secondSelect.value) ? '' : secondSelect.value}
						error={stringIsNumber(secondSelect.value)}
						helperText={stringIsNumber(secondSelect.value) && 'Введите, пожалуйста, число'}
					/>
				</FormControl>
				<FormControl className={classes.currencyType}>
					<InputLabel error={isNaN(Number(secondSelect.value))} id="demo-simple-select-label-2">
						Валюта
					</InputLabel>
					<Select
						id="demo-simple-select-2"
						labelId="demo-simple-select-label-2"
						value={secondSelect.name || ''}
						onChange={onSelectSecondCoin}
					>
						<MenuItem value="USD">USD</MenuItem>
						{items.map((item, index) => (
							<MenuItem key={`${item.name}_${index}`} value={item.name}>
								{item.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</div>
		</Paper>
	);
});

export default ConverterBlock;
