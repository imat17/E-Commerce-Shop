import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
	root: {
		margin: '15vh auto',
		minWidth: '45%',
	},
	media: {
		height: 0,
		paddingTop: '56.25%',
	},
	cardActions: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	cardContent: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	link: {
		textDecoration: 'none',
	},
	spinner: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));
