import React, {Component} from 'react'
import {Alert, AlertTitle} from '@material-ui/lab'
import {Button, Grid} from '@material-ui/core'

const Error = ({onRefresh}) => {
	return (
		<Alert style={{width: '100%', opacity: 0.9}} severity='error'>
			<AlertTitle color='secondary'>Network Error!</AlertTitle>
			Can't reach the server, Please refresh...
			<Grid item container justify='flex-start' xs={4}>
				<Button onClick={onRefresh} color='primary'>
					Refresh
				</Button>
			</Grid>
		</Alert>
	)
}

export default Error
