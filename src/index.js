import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AnalyzePart from "./status/status";
import Price from "./navBar/price/price";
import Dashboard from "../src/dashBoard/src/pages/index";
import Customers from "./dashBoard/src/pages/customers";
import NotFound from "./dashBoard/src/pages/404";
import accountPage from "./dashBoard/src/pages/account";
import settingPage from "./dashBoard/src/pages/settings";
import Login from "./dashBoard/src/pages/login";
import Register from "./dashBoard/src/pages/register";
import productPage from "./dashBoard/src/pages/products";
import {
    accountPath,
    customerPath,
    dashboardPath, loginPath,
    notFoundPath,
    pricePath,
    productPath, registerPath,
    settingPath, statusPath,
} from "./path/path";


export default function Routes(){
    return (
        <Router>
            <div>
                <Route exact path = "/" component={App}/>
                <Route exact path = {statusPath} component={AnalyzePart}/>
                <Route exact path = {pricePath} component={Price}/>
                <Route exact path = {dashboardPath} component={Dashboard}/>
                <Route exact path = {productPath} component={productPage}/>
                <Route exact path = {customerPath} component={Customers}/>
                <Route exact path ={notFoundPath} component={NotFound}/>
                <Route exact path = {accountPath} component={accountPage}/>
                <Route exact path ={settingPath} component={settingPage}/>
                <Route exact path = {loginPath} component={Login}/>
                <Route exact path = {registerPath} component={Register}/>
            </div>
        </Router>
    );
}

ReactDOM.render(
  <React.StrictMode>
      <div className={"webpage"}>
          < Routes/>
      </div>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
