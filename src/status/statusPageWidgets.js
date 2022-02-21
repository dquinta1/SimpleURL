import React from "react";
import './status.css';

export function statusNavBarWidget(){
    return (
        <div>
            <div className={"marginLeft25px"}>
                <div className={"logoDirect"}>
                    SimpleURL
                </div>

                <div  className={"displayInlineMargin10px"} id = {"navFont"}>
                    ENTERPRISE
                </div >
                <div className={"displayInlineMargin10px"} id = {"navFont"}>
                    RESOURCES
                </div>
                <div className={"displayInlineMargin10px"} id = {"navFont"}>
                    ABOUT
                </div>
                <div className={"displayInlineRightButton"} id = {"navFont"}>
                    My Account
                </div>
            </div>
        </div>)
}