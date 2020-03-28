import React, {Component} from 'react'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import virus from '../../img/virus.svg'

const useStyles = makeStyles(theme => ({
	paper: {
		padding: theme.spacing(1),
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
		textAlign: 'left',
		color: theme.palette.text.secondary,
		backgroundColor: 'red',
		height: 100,
		width: '100%'
	},
	banner: {
		marginBottom: -120,
		marginTop: 10,
		height: 230
	}
}))

const Banner = () => {
	const classes = useStyles()
	return (
		<Grid item xs={12} container justify='center' alignItems='center'>
			<img src={virus} className={classes.banner} />
		</Grid>
	)
}

export default Banner
