import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './Routes';
import { LoginPage, SignUpPage } from './Auth';

const queryClient = new QueryClient();

function App() {
	return (
		<div className='App'>
			<QueryClientProvider client={queryClient}>
				<Router>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/signup' element={<SignUpPage />} />
					</Routes>
				</Router>
			</QueryClientProvider>
		</div>
	);
}

export default App;
