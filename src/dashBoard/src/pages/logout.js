import React, {useState} from "react";
import {useAuth} from "../../../Hooks";
import {Navigate, useLocation} from "react-router-dom";
import {loginPath} from "../../../path/path";
import {signOut} from "firebase/auth";
import {auth} from "../../../Config";


export default class Logout extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true,
        }

    }


    async componentDidMount() {
        this.setState({loading: true});
        await signOut(auth);
        this.setState({loading: false})
    }

    render(){
        console.log(this.state.loading)
        if(this.state.loading){
            return(
                <div>
                    {"logging out..."}
                </div>
            )
        } else{
            return <Navigate to={loginPath} state={{from: window.location}}/>;
        }
    }

}


