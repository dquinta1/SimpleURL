import * as React from 'react';
import PropTypes from 'prop-types';
import {
	Avatar,
	Box,
	Container,
	CssBaseline,
	TextField,
	Typography,
	FormControlLabel,
	Checkbox,
	Button,
	Grid,
	Link,
	Slide,
	AppBar,
	useScrollTrigger,
	Toolbar,
	IconButton,
} from '@mui/material';
import { LockOutlined, MenuOutlined } from '@mui/icons-material/';

export const HomePage = (props) => {
	//TODO: inject dependencies from useLogic here

	const handleSubmit = () => {
		//TODO: implement this and extract it to useLogic
	};

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
			<Box
				sx={{
					marginTop: 12,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlined />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign In
				</Typography>
				<Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					<TextField
						margin='normal'
						required
						fullWidth
						name='email'
						label='Email Address'
						type='email'
						id='email'
						autoComplete='email'
						autoFocus
					/>
					<TextField
						margin='normal'
						required
						fullWidth
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
					/>
					<FormControlLabel
						control={<Checkbox value='remember' color='primary' />}
						label='Remember Me'
					/>
					<Button
						type='submit'
						fullWidth
						variant='container'
						sx={{ mt: 3, mb: 2 }}
					>
						Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href='#' variant='body2'>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
};
