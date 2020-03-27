import React, {useState, useEffect} from 'react'

import {getSummary, getDetails} from '../services/covid'

export default function() {
	const [summary, setSummary] = useState({
		active: 0,
		cases: 0,
		casesPerOneMillion: 0,
		critical: 0,
		deaths: 0,
		recovered: 0,
		todayCases: 0,
		todayDeaths: 0
	})

	const [casesList, setCasesList] = useState([])

	const [isLoading, setIsLoading] = useState(true)

	const [error, setError] = useState(false)

	const [refresh, setRefresh] = useState(false)

	const reload = () => setRefresh(r => !r)

	useEffect(() => {
		setError(false)
		setIsLoading(true)

		Promise.all([getSummary(), getDetails()])
			.then(([summary, details]) => {
				setSummary(summary)
				setCasesList(details.cases)
				setIsLoading(false)
				setError(false)
			})
			.catch(error => {
				setError(true)
				setIsLoading(false)
				console.log(error)
			})
	}, [refresh])

	return {summary, casesList, isLoading, error, reload}
}
