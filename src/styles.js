import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(1),
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
		textAlign: 'left',
		color: theme.palette.text.secondary,
		backgroundColor: 'white'
	},
	appBar: {},

	container: {
		marginTop: '20px',
		padding: 0
	}
}))

export default useStyles
