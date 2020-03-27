import React, {Component} from 'react'
import {Alert, AlertTitle} from '@material-ui/lab'
import {Button, Grid} from '@material-ui/core'

const Error = ({onRefresh}) => {
	return (
		<Alert severity='error'>
			<AlertTitle>Network Error!</AlertTitle>
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
