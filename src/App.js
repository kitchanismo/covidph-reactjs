import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import Nav from './components/nav'
import Cards from './components/cards'
import useStyles from './styles'
import './App.css'
import 'typeface-roboto'
import List from './components/list'
import Banner from './components/banner'
import Chart from './components/chart'

import useCovid from './hooks/useCovid'
import {countData} from './services/utils'
import Charts from './components/charts'
import Footer from './components/footer'

const App = props => {
	const classes = useStyles()

	const {summary, casesList, isLoading, error, reload} = useCovid()

	const objCurrentlyAt = countData(casesList, 'currently_at')

	const objResidentyOf = countData(casesList, 'resident_of')

	return (
		<React.Fragment>
			<Nav isLoading={isLoading}></Nav>
			<Banner></Banner>
			{!isLoading && (
				<React.Fragment>
					<Container maxWidth='sm' className={classes.container}>
						<Grid
							container
							item
							spacing={3}
							direction='row'
							justify='space-around'
						>
							<Cards summary={summary} />
						</Grid>
					</Container>
					<Charts items={casesList}></Charts>
					<List data={objCurrentlyAt} title='Health Facilities'></List>
					<List data={objResidentyOf} title='Affected Areas'></List>
					<Footer></Footer>
				</React.Fragment>
			)}
		</React.Fragment>
	)
}

export default App
