import {Navigate, useLocation} from "react-router-dom";
import React, {useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./Config";
import {getUserInCache, resetUserInCache, setUserInCache} from "./cacheInfo";
import {loginPath} from "./path/path";
import {backToMainPage} from "./status/statusPageWidgets";



export const validateUser =()=>(

    onAuthStateChanged(auth, (user) => {
        if (user) {
            if(JSON.stringify(getUserInCache()) !== JSON.stringify(user)){
                setUserInCache(user)
            }

        } else {
            resetUserInCache();
            window.location.href = backToMainPage()  + loginPath;
        }
    })
);