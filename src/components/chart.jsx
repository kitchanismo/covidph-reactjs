import React, {Component} from 'react'
import PieChart from 'react-minimal-pie-chart'
import {Grid, Typography, Chip} from '@material-ui/core'

import {deepPurple, deepOrange} from '@material-ui/core/colors'

const Chart = ({items, title}) => {
	return (
		<Grid
			item
			container
			justify='center'
			alignItems='center'
			direction='column'
			style={{padding: 40, paddingTop: 20}}
		>
			<Typography color='primary' variant='h6' style={{marginBottom: 20}}>
				{title}
			</Typography>
			<PieChart
				animate={true}
				animationDuration={500}
				animationEasing='ease-out'
				cx={50}
				cy={50}
				data={items}
				label={({data, dataIndex}) => {
					return `${Math.round(data[dataIndex].percentage)} %`
				}}
				labelPosition={50}
				labelStyle={{
					fill: 'white',
					fontFamily: 'typeface-roboto',
					fontSize: '5px'
				}}
				lengthAngle={360}
				onClick={undefined}
				onMouseOut={undefined}
				onMouseOver={undefined}
				paddingAngle={0}
				radius={50}
				rounded={false}
				startAngle={0}
				viewBoxSize={[100, 100]}
			/>
			<Grid
				style={{marginTop: 20}}
				item
				container
				justify='space-around'
				xs={12}
			>
				{items.map(item => (
					<Chip
						label={item.title}
						color='secondary'
						style={{backgroundColor: item.color}}
					/>
				))}
			</Grid>
		</Grid>
	)
}

export default Chart
