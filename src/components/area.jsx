import React, {useContext, useEffect, useState} from 'react'
import {Container, Grid, Paper, Typography} from '@material-ui/core'
import {CovidContext} from '../providers/context'

import Charts from './charts'
import Footer from './common/footer'
import Cards from './cards'

import useStyles from '../styles'

const Area = props => {
	const classes = useStyles()

	const {casesList, isLoading, error} = useContext(CovidContext)

	const name = props.match.params.name.toLowerCase().replace(/-/g, ' ')

	const [area, setArea] = useState({
		name: '',
		cases: [],
		infected: 0,
		deaths: 0,
		recovered: 0,
		active: 0
	})

	const getCasesByArea = area => {
		return casesList.filter(c => {
			if (c.resident_of.toLowerCase() === area) return c
		})
	}

	useEffect(() => {
		const cases = getCasesByArea(name.match(/validation.*/gi) ? '?' : name)

		const deaths = cases.filter(c => c.status.match(/dead.*/gi)).length

		const recovered = cases.filter(c => c.status.match(/recover.*/gi)).length

		const infected = cases.length

		const active = infected - (deaths + recovered)

		setArea({
			name,
			cases,
			recovered,
			deaths,
			infected,
			active
		})
	}, [name, casesList])

	const title = (
		<Grid style={{marginTop: 20}} container xs={12} item justify='center'>
			<Paper className={classes.paper}>
				<Typography color='primary' variant='h6'>
					{name.toUpperCase()}
				</Typography>
			</Paper>
		</Grid>
	)

	return (
		!isLoading &&
		!error && (
			<React.Fragment>
				<Container maxWidth='md'>
					{title}
					<Cards data={area} />
					<Charts items={area.cases}></Charts>
				</Container>
			</React.Fragment>
		)
	)
}

export default Area
