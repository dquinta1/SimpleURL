import * as React from 'react';
import PropTypes from 'prop-types';
import { LoginForm } from './LoginForm';
import {
	Avatar,
	Box,
	Container,
	CssBaseline,
	Typography,
	Slide,
	AppBar,
	useScrollTrigger,
	Toolbar,
	IconButton,
} from '@mui/material';
import { MenuOutlined } from '@mui/icons-material/';

export const LoginPage = (props) => {
	//TODO: inject dependencies from useLogic here



	//TODO: extract this into useLogic
	function HideOnScroll({ children }) {
		const trigger = useScrollTrigger();

		return (
			<Slide appear={false} direction='down' in={!trigger}>
				{children}
			</Slide>
		);
	}
	HideOnScroll.propTypes = {
		children: PropTypes.element.isRequired,
	};

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<HideOnScroll {...props}>
				<AppBar>
					<Toolbar>
						<IconButton
							edge='start'
							color='inherit'
							aria-label='menu'
							sx={{ mr: 2 }}
						>
							<MenuOutlined />
						</IconButton>
						<Typography
							variant='h6'
							noWrap
							component='div'
							sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
						>
							Scroll to Hide App Bar
						</Typography>
						<Box sx={{ flexGrow: 0 }}>
							<IconButton>
								<Avatar alt='avatar' src='https://picsum.photos/500' />
							</IconButton>
						</Box>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<LoginForm />
		</Container>
	);
};
