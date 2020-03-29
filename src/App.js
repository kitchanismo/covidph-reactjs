import React from 'react'

import CovidProvider from './providers/covid'
import Routes from './routes'

import Nav from './components/common/nav'
import Banner from './components/common/banner'
import Footer from './components/common/footer'

import './App.css'
import 'typeface-roboto'

const App = props => {
	return (
		<React.Fragment>
			<CovidProvider>
				<Nav {...props}></Nav>
				<Banner></Banner>
				<Routes></Routes>
				<Footer></Footer>
			</CovidProvider>
		</React.Fragment>
	)
}

export default App
