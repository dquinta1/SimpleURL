import React from "react";
import './status.css';
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import {loginPath, pricePath} from "../path/path";

export function backToMainPage(){
    let url = window.location.href;
    let mainURL = url;
    for(let i = url.length - 1; i >= 0; i--){
        if(url[i] === '/'){

            mainURL = url.toString().substr(0, i);
            console.log(mainURL)
            break;
        }
    }

    return mainURL;
}

export function redirectTo(str){
    window.location.href = backToMainPage() + str;
}


export function statusNavBarWidget(){
    return (
        <div>
            <div className={"marginLeft25px"}>
                <div className={"logoDirect"} onClick={()=>{window.location.href = backToMainPage()}}>
                    SimpleURL
                </div>

                <div  className={"displayInline"} id = {"navFont"}>
                    ENTERPRISE
                </div >
                <div className={"displayInlineMargin25px"} id = {"navFont"}>
                    RESOURCES
                </div>
                <div className={"displayInlineMargin25px"} id = {"navFont"} onClick={()=>{redirectTo(pricePath)}}>
                    PRICE
                </div>
                <div className={"displayInlineMargin25px"} id = {"navFont"}>
                    ABOUT
                </div>
                <div className={"displayInlineRightButton"} id = {"navFont"} onClick={()=>{redirectTo(loginPath)}}>
                    My Account
                </div>
            </div>
        </div>)
}

export function divider(){
    return (
        <div>
            <hr className="solid"></hr>
        </div>

    )
}

function resizeLink(url){
    let outputURL = "", count = 0, added = 0, addedCount = 2;


    for(let i = 0 ;i < url.length; i += 1){
        if(count >= 100 && added < addedCount){
            outputURL += "\n";
            count = 0;
            added += 1;
        }
        count += 1;
        outputURL += url[i];
    }
    return outputURL;
}

const placeHolderURL =  "http://chart.apis.google.com/chart?chs=500x500&chma=0,0,100,100&cht=p&chco=FF0000%2CFFFF00%7CFF8000%2C00FF00%7C00FF00%2C0000FF&chd=t%3A122%2C42%2C17%2C10%2C8%2C7%2C7%2C7%2C7%2C6%2C6%2C6%2C6%2C5%2C5&chl=122%7C42%7C17%7C10%7C8%7C7%7C7%7C7%7C7%7C6%7C6%7C6%7C6%7C5%7C5&chdl=android%7Cjava%7Cstack-trace%7Cbroadcastreceiver%7Candroid-ndk%7Cuser-agent%7Candroid-webview%7Cwebview%7Cbackground%7Cmultithreading%7Candroid-source%7Csms%7Cadb%7Csollections%7Cactivity|Chart";
export function shortURLText(){
    let createdTime = "CREATED ", companyName = '', originalURL = "", shortURL = "";
    createdTime += "12:00PM 01/01/2021";
    companyName = 'COMP 539 Team#3';
    originalURL = resizeLink(placeHolderURL);

    shortURL = "simpleURL.com/abc";
    return (
        <div>


            <div className={"statusTextFont"}>
                <br/><br/>
                <div>
                    <DialogContentText id="alert-dialog-slide-description">
                        {createdTime}
                    </DialogContentText>
                </div>
                <br/>
                <div id = "textBoldLarger">
                    {companyName}
                </div>
                <br/>
                <div>
                    <DialogContentText id="alert-dialog-slide-description" className={"displayNewLine"}>
                            {originalURL}
                    </DialogContentText>
                </div>
                <br/>
                <div>
                    <div>
                        <DialogContentText id="alert-dialog-slide-description" className={"displayInline"}>
                            <div  className={"shortURLCSS"}>
                                {shortURL}
                            </div>

                        </DialogContentText>
                        {'        '}
                        <Button variant="outlined" className={"displayInline"}>Copy</Button>
                    </div>
                </div>

            </div>

            <br/>

        </div>
    )
}

export function displayTwoItemsInOneRow(itema, itemb){
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                    {itema}
                </Grid>
                <Grid item xs={8}>
                    {itemb}
                </Grid>
            </Grid>
        </Box>
    )
}