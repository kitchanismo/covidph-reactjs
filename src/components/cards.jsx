import React, {Component} from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import UserIcon from '@material-ui/icons/AccountCircle'
import Grid from '@material-ui/core/Grid'

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
		color: theme.palette.text.secondary
	},

	container: {
		marginTop: '20px'
	}
}))

const Cards = ({summary}) => {
	const classes = useStyles()

	const getPercentage = (part, whole) => {
		const x = part * 100
		return Math.round(x / whole)
	}

	const card = ({count, title, color, hasPercentage}) => (
		<Grid item xs={6}>
			<Paper className={classes.paper}>
				<Grid container direction='row' justify='center'>
					<Grid item xs={6}>
						<Typography
							variant={hasPercentage ? 'subtitle2' : 'h6'}
							style={{color}}
						>
							{`${count}${
								hasPercentage
									? '/' + getPercentage(count, summary.cases) + '%'
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

	const newAdded = (
		<Grid item xs={12}>
			<Paper className={classes.paper}>
				<Typography style={{color: '#3f51b5'}} variant='subtitle2'>
					New Cases
				</Typography>
				<Divider style={{marginTop: 5, marginBottom: 10}}></Divider>
				<Grid container direction='row' justify='space-around'>
					<Grid
						container
						item
						xs={4}
						justify='center'
						direction='column'
						alignItems='center'
					>
						<Typography variant='h6'>{summary.todayCases}</Typography>
						<Typography variant='caption'>infected</Typography>
					</Grid>
					<Divider orientation='vertical' flexItem />
					<Grid
						container
						item
						xs={4}
						justify='center'
						direction='column'
						alignItems='center'
					>
						<Typography variant='h6'>{summary.todayDeaths}</Typography>
						<Typography variant='caption'>Deaths</Typography>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	)

	return (
		<React.Fragment>
			{/* {newAdded} */}
			{card({
				count: summary.cases,
				title: 'Infected',
				color: classes.paper.color
			})}
			{card({count: summary.active, title: 'Active', color: '#3f51b5'})}
			{card({
				count: summary.deaths,
				title: 'Deaths',
				hasPercentage: true,
				color: 'rgb(220, 0, 78)'
			})}

			{/* {card({count: summary.critical, title: 'Criticals', color: 'rgb(255, 87, 34)'})} */}
			{card({
				count: summary.recovered,
				title: 'Recovered',
				hasPercentage: true,
				color: '#4caf50'
			})}
		</React.Fragment>
	)
}

export default Cards
