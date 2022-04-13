import React, {useState} from 'react';
import {Navigate, useLocation, Route, Redirect} from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../Config';
import {loginPath} from "../path/path";

import Login from '../dashBoard/src/pages/login';
import {} from "@mui/icons-material";
import {getUserInCache, resetUserInCache, setUserInCache} from "../cacheInfo";




export default  function ProtectedPage({component: Component}) {
	let location = useLocation();

	let [loginUser, setUser] = useState();

	onAuthStateChanged(auth, (user) => {
		if (user) {
			setUser(user);
			if(JSON.stringify(getUserInCache()) !== JSON.stringify(user)){
				setUserInCache(user)
			}
			console.log(getUserInCache().uid);
		} else {
			resetUserInCache();
			return <Navigate to={loginPath} state={{from: location}}/>;
		}
	});

	let isLogin = loginUser? true: false;
	if(isLogin){
		return Component;
	} else{
		return <Login/>
	}
	// if (loginUser) {
	// 	// User is signed in, see docs for a list of available properties
	// 	// https://firebase.google.com/docs/reference/js/firebase.User
	// 	// ...
	// 	return children;
	// } else {
	// 	// No user is signed in.
	// 	window.location = 10
	// }


	// onAuthStateChanged(auth, (user) => {
	//     if (user) {
	//         console.log(user);
	//         return children;
	//     } else {
	//         return <Navigate to={loginPath} state={{ from: location }} />;
	//     }
	// });
}
