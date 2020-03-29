import React from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'

import Home from './components/home'
import Area from './components/area'

const Routes = props => {
	return (
		<Switch>
			<Route path='/:name' component={Area} />>
			<Route path='/' component={Home} />>
		</Switch>
	)
}

export default Routes
