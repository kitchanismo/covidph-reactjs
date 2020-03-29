import React, {Component, useContext} from 'react'
import {Grid, Typography} from '@material-ui/core'
import {CovidContext} from '../../providers/context'

const Footer = () => {
	const {isLoading} = useContext(CovidContext)
	return (
		!isLoading && (
			<Grid style={{padding: 10}} item container xs={12} justify='center'>
				<Typography color='primary' variant='subtitle2'>
					kitchanismo
				</Typography>
			</Grid>
		)
	)
}

export default Footer
