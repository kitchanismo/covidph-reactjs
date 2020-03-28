import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
	Divider,
	Button,
	Avatar,
	Grid,
	Container,
	Paper
} from '@material-ui/core'

import {deepPurple} from '@material-ui/core/colors'
import {itemsReducer} from '../../services/utils'

const useStyles = makeStyles(theme => ({
	list: {
		width: '100%',

		marginTop: 20,
		marginBottom: 20,
		marginLeft: 0,
		marginRight: 0,
		borderRadius: 7
	},
	title: {
		marginTop: 10,
		marginBottom: 5,
		paddingLeft: 15,
		paddingTop: 10
	},

	count: {
		width: theme.spacing(4),
		height: theme.spacing(4),
		color: 'white',
		backgroundColor: '#3f51b5',
		fontSize: 12
	},
	btn: {marginRight: theme.spacing(1)}
}))

export default function ListView({items, title}) {
	const classes = useStyles()

	const [isHide, setIsHide] = useState(true)

	const displayItems = !isHide ? items : items.slice(0, 5)

	return (
		<Paper className={classes.list}>
			<Typography color='primary' className={classes.title} variant='h6'>
				{title}
			</Typography>
			<Divider />
			<List
				color='primary'
				dense={true}
				component='nav'
				aria-label='main mailbox folders'
			>
				{displayItems.map((item, i) => {
					return (
						<ListItem button key={i}>
							<ListItemIcon>
								<Avatar className={classes.count}>{item.count}</Avatar>
							</ListItemIcon>
							<ListItemText primary={item.name} />
						</ListItem>
					)
				})}

				<Grid item container justify='center'>
					<Button
						onClick={() => setIsHide(t => !t)}
						href='#text-buttons'
						color='primary'
						className={classes.btn}
					>
						{`${!isHide ? 'Hide' : 'See All'}`}
					</Button>
				</Grid>
			</List>
		</Paper>
	)
}
