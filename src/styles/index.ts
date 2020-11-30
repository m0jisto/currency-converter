import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

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
		cryptoIcon: {
			width: 20,
			height: 20,
			borderRadius: '100%',
		},
		currencyName: {
			minWidth: '50%',
		},
		currencyType: {
			minWidth: '30%',
		},
	}),
);

export default useStyles;
