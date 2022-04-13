import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnalyzePart from './status/status';
import Price from './navBar/price/price';
import Dashboard from '../src/dashBoard/src/pages/index';
import Customers from './dashBoard/src/pages/customers';
import NotFound from './dashBoard/src/pages/404';
import AccountPage from './dashBoard/src/pages/account';
import SettingPage from './dashBoard/src/pages/settings';
import Login from './dashBoard/src/pages/login';
import Register from './dashBoard/src/pages/register';
import ProductPage from './dashBoard/src/pages/products';
import Logout from './dashBoard/src/pages/logout'
import {
	accountPath,
	customerPath,
	dashboardPath,
	loginPath, logoutPath,
	notFoundPath,
	pricePath,
	productPath,
	registerPath,
	settingPath,
	statusPath,
} from './path/path';
import { QueryClientProvider, QueryClient } from 'react-query';
import ProtectedPage from './Routes/ProtectedPage';


const queryClient = new QueryClient();

export default function MyRoutes() {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<Routes>
					<Route path='/' element={<App/>} />
					<Route path={loginPath} element={<Login/>} />
					<Route path={registerPath} element={<Register/>} />

					<Route path={statusPath} element={<AnalyzePart/>} />
					<Route path={pricePath} element={<Price/>} />
					<Route
						path={productPath}
						element={
							<ProtectedPage component={<ProductPage/>}/>
						}
					/>


					<Route path={customerPath} element={<Customers/>} />
					<Route path={notFoundPath} element={<NotFound/>} />

					<Route path={accountPath} element={<AccountPage/>} />
					<Route path={settingPath} element={<SettingPage/>} />
					<Route path={logoutPath} element = {<Logout/>}/>
					<Route
						path={dashboardPath}
						element={
							<ProtectedPage component={<Dashboard/>}/>
						}
					/>
				</Routes>
			</Router>
		</QueryClientProvider>
	);
}

ReactDOM.render(
	<React.StrictMode>
		<div className={'webpage'}>
			<MyRoutes />
		</div>
	</React.StrictMode>,
	document.getElementById('root')
);
