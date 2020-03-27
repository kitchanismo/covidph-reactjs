import React, {useState, useEffect} from 'react'
import Chart from './chart'
import Divider from '@material-ui/core/Divider'
import {deepPurple} from '@material-ui/core/colors'
const Charts = ({items}) => {
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
				color: '#4caf50',
				title: 'Below 30',
				value: below
			},
			{
				color: deepPurple[500],
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
			<Chart title='Affected Cases by Gender' items={gender}></Chart>
			<Divider style={{marginTop: 5, marginBottom: 10}}></Divider>
			<Chart title='Affected Cases by Age' items={ages}></Chart>
		</React.Fragment>
	)
}

export default Charts
