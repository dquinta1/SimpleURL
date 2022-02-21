import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AnalyzePart from "./status/status";


export default function Routes(){
    return (
        <Router>
            <div>
                <Route exact path = "/" component={App}/>
                <Route exact path = "/status" component={AnalyzePart}/>
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
