import React, {Component, useState} from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import {Alert, AlertTitle} from '@material-ui/lab'
import useStyles from '../styles'

const Info = ({summary}) => {
	const classes = useStyles()
	const [isOpen, setIsOpen] = useState(true)

	if (!isOpen) return null

	return (
		<Alert
			style={{width: '100%', opacity: 0.9}}
			severity='info'
			onClose={() => setIsOpen(o => !o)}
		>
			<Grid item xs={12} container justify='center'>
				<AlertTitle color='primary'>New Cases</AlertTitle>
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
						<Typography variant='caption'>Infected</Typography>
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
			</Grid>
		</Alert>
	)
}

export default Info
