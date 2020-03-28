import React, {useState, useEffect, useContext} from 'react'
import Chart from './chart'
import Divider from '@material-ui/core/Divider'

import {CovidContext} from '../providers/context'
import {Container} from '@material-ui/core'

const Charts = props => {
	const {casesList: items} = useContext(CovidContext)
	const [gender, setGender] = useState([])
	const [ages, setAges] = useState([])

	useEffect(() => {
		const male = items.filter(item => item.sex === 'M').length
		const female = items.filter(item => item.sex === 'F').length

		const below = items.filter(item => item.age < 31).length

		const mid = items.filter(item => item.age >= 31 && item.age <= 60).length

		const above = items.filter(item => item.age > 60).length

		setGender([
			{
				color: '#3f51b5',
				title: 'Male',
				value: male
			},
			{
				color: 'rgb(220, 0, 78)',
				title: 'Female',
				value: female
			}
		])
		setAges([
			{
				color: 'rgba(0, 0, 0, 0.54)',
				title: 'Below 30',
				value: below
			},
			{
				color: '#3f51b5',
				title: '31-60',
				value: mid
			},
			{
				color: 'rgb(220, 0, 78)',
				title: '61 Above',
				value: above
			}
		])
	}, [items])

	return (
		<React.Fragment>
			<Divider style={{marginTop: 30, marginBottom: 10}}></Divider>
			<Chart key={1} title='Affected Cases by Gender' items={gender}></Chart>
			<Divider style={{marginTop: 5, marginBottom: 10}}></Divider>
			<Chart key={2} title='Affected Cases by Age' items={ages}></Chart>
		</React.Fragment>
	)
}

export default Charts
