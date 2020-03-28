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

	const {isLoading, error, facilities, residents} = useContext(CovidContext)

	return (
		!isLoading &&
		!error && (
			<React.Fragment>
				<Container maxWidth='sm' className={classes.container}>
					<Grid
						container
						item
						spacing={3}
						direction='row'
						justify='space-around'
					>
						<Cards />
					</Grid>
				</Container>
				<Charts></Charts>
				<List items={facilities} title='Health Facilities'></List>
				<List items={residents} title='Affected Areas'></List>
				<Footer></Footer>
			</React.Fragment>
		)
	)
}

export default Home
