import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage, SignUpPage } from './Auth';
import { HomePage } from './Routes';
import { createTheme, ThemeProvider } from '@mui/material';

const queryClient = new QueryClient();

const theme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function App() {
	return (
		<div className='App'>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={theme}>
					<Router>
						<Routes>
							<Route path='/' element={<LoginPage />} />
							<Route path='/signup' element={<SignUpPage />} />
						</Routes>
					</Router>
				</ThemeProvider>
			</QueryClientProvider>
		</div>
	);
}

export default App;
