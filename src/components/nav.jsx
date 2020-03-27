import React, {Component} from 'react'
import useStyles from '../styles'
import logo from '../img/logo.svg'
import {
	Toolbar,
	AppBar,
	Typography,
	CssBaseline,
	Box,
	Container,
	Slide,
	useScrollTrigger,
	Grid,
	LinearProgress
} from '@material-ui/core'

import PropTypes from 'prop-types'
import Info from './info'
import Error from './error'

function HideOnScroll(props) {
	const {children, window} = props

	const trigger = useScrollTrigger({target: window ? window() : undefined})

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	)
}

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func
}

const Nav = ({summary, error, onReload, ...props}) => {
	const classes = useStyles()
	const noNewCases = summary.todayCases === 0 && summary.todayDeaths === 0
	return (
		<React.Fragment>
			<CssBaseline />
			<HideOnScroll {...props}>
				<AppBar>
					{!noNewCases && <Info summary={summary}></Info>}
					{error && <Error onRefresh={onReload}></Error>}
					<Grid item container justify='center'>
						<Toolbar>
							<img
								width='25'
								height='25'
								src={logo}
								style={{paddingRight: 5}}
							/>
							<Typography variant='h6'>COVIDPH</Typography>
						</Toolbar>
					</Grid>
					{props.isLoading && <LinearProgress color='secondary' />}
				</AppBar>
			</HideOnScroll>
			<Toolbar />
		</React.Fragment>
	)
}

export default Nav
