import React, {Component} from 'react'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import virus from '../../img/virus.svg'
import wavy from '../../img/wavy.svg'

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
		marginTop: -50,
		height: 230
	},
	container: {},
	wavy: {
		width: '100%'
	}
}))

const Banner = () => {
	const classes = useStyles()
	return (
		<div className={classes.container}>
			<Grid item xs={12} container justify='center' alignItems='center'>
				<img src={wavy} className={classes.wavy} />
			</Grid>
			<Grid item xs={12} container justify='center' alignItems='center'>
				<img src={virus} className={classes.banner} />
			</Grid>
		</div>
	)
}

export default Banner
