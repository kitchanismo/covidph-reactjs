import React, {useContext} from 'react'
import {Container, Grid} from '@material-ui/core'
import {CovidContext} from '../providers/context'

import Charts from './charts'
import Footer from './common/footer'
import List from './common/list'
import Cards from './cards'

import useStyles from '../styles'

const Home = props => {
	const classes = useStyles()

	const {
		isLoading,
		error,
		facilities,
		residents,
		summary,
		casesList
	} = useContext(CovidContext)

	return (
		!isLoading &&
		!error && (
			<React.Fragment>
				<Container maxWidth='md'>
					<Cards data={summary} />
					<Charts items={casesList}></Charts>
					<List
						{...props}
						isClickable
						items={residents}
						title='Affected Areas'
					></List>
					<List {...props} items={facilities} title='Health Facilities'></List>
				</Container>
			</React.Fragment>
		)
	)
}

export default Home
