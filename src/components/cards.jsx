import React, {useContext} from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import UserIcon from '@material-ui/icons/AccountCircle'
import Grid from '@material-ui/core/Grid'

import {makeStyles} from '@material-ui/core/styles'
import {getPercentage} from '../services/utils'
import {useMedia} from 'react-use'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(1),
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
		textAlign: 'left',
		color: theme.palette.text.secondary
	},

	container: {
		marginTop: '15px'
	}
}))

const Cards = ({data}) => {
	const isWeb = useMedia('(min-width: 600px)')

	const classes = useStyles()

	const card = ({count, title, color, hasPercentage}) => (
		<Grid item xs={isWeb ? 3 : 6}>
			<Paper className={classes.paper}>
				<Grid container direction='row' justify='center'>
					<Grid item xs={6}>
						<Typography
							variant={hasPercentage ? 'subtitle1' : 'h6'}
							style={{color}}
						>
							{`${count}${
								hasPercentage
									? '/' + getPercentage(count, data.infected) + '%'
									: ''
							}`}
						</Typography>
						<Typography variant='caption'>{title}</Typography>
					</Grid>
					<Grid container item xs={6} justify='flex-end' alignItems='center'>
						<UserIcon style={{fontSize: 50, color, paddingLeft: 10}}></UserIcon>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	)

	return (
		<Grid
			className={classes.container}
			container
			item
			spacing={3}
			direction='row'
			justify='space-around'
		>
			{card({
				count: data.infected,
				title: 'Infected',
				color: classes.paper.color
			})}
			{card({count: data.active, title: 'Active', color: '#3f51b5'})}
			{card({
				count: data.deaths,
				title: 'Deaths',
				hasPercentage: true,
				color: 'rgb(220, 0, 78)'
			})}
			{card({
				count: data.recovered,
				title: 'Recovered',
				hasPercentage: true,
				color: '#4caf50'
			})}
		</Grid>
	)
}

export default Cards
