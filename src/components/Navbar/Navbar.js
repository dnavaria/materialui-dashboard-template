import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {mainNavbarItems} from './navbarListItems';
import {navbarStyles} from './styles';
import {useNavigate} from 'react-router-dom';

// const drawerWidth = 240;

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<Drawer
			sx={navbarStyles.drawer}
			variant="permanent"
			anchor="left"
		>
			<Toolbar/>
			<Divider/>
			<List>
				{mainNavbarItems.map((text) => (
					<ListItem key={text.id} disablePadding>
						<ListItemButton onClick={() => navigate(text.route)}>
							<ListItemIcon sx={navbarStyles.icons}>
								{text.icon}
							</ListItemIcon>
							<ListItemText primary={text.label} sx={navbarStyles.text}/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider/>
		</Drawer>
	)
}

export default Navbar;