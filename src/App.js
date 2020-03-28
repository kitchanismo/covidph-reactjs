import React from 'react'

import CovidProvider from './providers/covid'

import Nav from './components/common/nav'
import Banner from './components/common/banner'
import Home from './components/home'

import './App.css'
import 'typeface-roboto'

const App = props => {
	return (
		<React.Fragment>
			<CovidProvider>
				<Nav></Nav>
				<Banner></Banner>
				<Home></Home>
			</CovidProvider>
		</React.Fragment>
	)
}

export default App
