import { useLogic } from './useLogic';
import {
	Avatar,
	Box,
	TextField,
	Typography,
	FormControlLabel,
	Checkbox,
	Button,
	Grid,
	Link,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material/';

export const LoginForm = () => {
	const {
		email,
		emailIsValid,
		emailErrorText,
		password,
		passwordIsValid,
		passwordErrorText,
		setEmail,
		useValidateEmail,
		setPassword,
		useValidatePassword,
		handleSubmit,
	} = useLogic();

	useValidateEmail();
	useValidatePassword();

	return (
		<Box
			sx={{
				marginTop: 12,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Avatar sx={{ m: 1, bgcolor: 'primary.dark' }}>
				<LockOutlined />
			</Avatar>
			<Typography component='h1' variant='h5'>
				Sign In
			</Typography>
			<Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
					value={email ?? undefined}
					onChange={(event) => setEmail(event.target.value)}
					error={!emailIsValid}
					helperText={emailErrorText ?? null}
					color={emailIsValid && email != null ? 'success' : ''}
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
					value={password ?? undefined}
					onChange={(event) => setPassword(event.target.value)}
					error={!passwordIsValid}
					helperText={passwordErrorText ?? null}
					color={passwordIsValid && password != null ? 'success' : ''}
				/>
				<Button
					type='submit'
					fullWidth
					variant='contained'
					color='primary'
					sx={{ mt: 3, mb: 2 }}
					disabled={!(emailIsValid && passwordIsValid)}
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
	);
};
