import React, {Component} from 'react'
import {Grid, Typography} from '@material-ui/core'

const Footer = () => {
	return (
		<Grid
			style={{padding: 10}}
			item
			container
			xs={12}
			alignItems='center'
			justify='center'
		>
			<Typography color='primary' variant='subtitle2'>
				kitchanismo
			</Typography>
		</Grid>
	)
}

export default Footer
