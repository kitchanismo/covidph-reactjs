import React, {Component, useContext} from 'react'
import {Grid, Typography} from '@material-ui/core'
import {CovidContext} from '../../providers/context'
import footerWavy from '../../img/footerWavy.svg'
const Footer = () => {
	const {isLoading, error} = useContext(CovidContext)
	return (
		!isLoading &&
		!error && (
			<Grid
				style={{width: '100%'}}
				xs={12}
				justify='center'
				alignContent='center'
			>
				<img src={footerWavy} className={{width: '100%'}}></img>
				<Typography
					style={{textAlign: 'center', color: 'white', marginTop: -30}}
					variant='subtitle2'
				>
					kitchanismo
				</Typography>
			</Grid>
		)
	)
}

export default Footer
