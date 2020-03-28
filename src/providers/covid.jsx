import React from 'react'
import {CovidContext} from './context'
import useCovid from '../hooks/useCovid'
import {countData, itemsReducer} from '../services/utils'

const CovidProvider = props => {
	const {casesList, ...rest} = useCovid()

	const objCurrentlyAt = countData(casesList, 'facility')

	const objResidentOf = countData(casesList, 'resident_of')

	const replaceIfUnknown = items =>
		items.map(item => {
			if (item.name === '?') return {...item, name: 'For Validation'}

			return item
		})

	const facilities = replaceIfUnknown(itemsReducer(objCurrentlyAt))

	const residents = replaceIfUnknown(itemsReducer(objResidentOf))

	return (
		<CovidContext.Provider value={{...rest, casesList, residents, facilities}}>
			{props.children}
		</CovidContext.Provider>
	)
}

export default CovidProvider
