import logo from './logo.svg';
import './fontFamily/fontFamily.css'
import './mainPage.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import * as React from 'react';
import Slide from '@mui/material/Slide';
import LinearWithValueLabel from './loadingProgress/line.js'
import {useState} from "react";
import {Alert, AlertTitle, Collapse, IconButton} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
// UI design idea from https://www.shorturl.at/
function App() {

    const [load, setLoad] = React.useState(false)
    const [openCustomizeDialog, setOpenCustomizeDialog] = React.useState(false);
    const [validURL, setValidURL] = React.useState(false);
    const [inputURL, setInputURL] = React.useState("");
    const [messageOpen, setMessageOpen] = React.useState(false);
    const [displayCount, setCount] =  React.useState(1);
    function setURLAndCheck(event){
        let url = event.target.value;
        setInputURL(url);
        setValidURL(checkValidURL(url));
    }

    function handleShorten(){
        setLoad(true);
        setCount(0);
        setMessageOpen(true);
    }

    function returnSuccessResult(){
        if(load && displayCount === 0){
            return(
                <div className={"CenterDivMessage"}>
                    <Collapse in={messageOpen}>
                        <Alert
                            severity="success"
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setMessageOpen(false);
                                    }}
                                >
                                    <CloseIcon fontSize="inherit"/>
                                </IconButton>
                            }
                        >

                            <AlertTitle>Success</AlertTitle>
                            Your Simple URL is — <strong>{inputURL}</strong>
                        </Alert>
                    </Collapse>
                </div>)
        }
    }

    const handleClose = () => {
        setOpenCustomizeDialog(false);
    };

    //source from https://codesandbox.io/s/uchodq?file=/demo.js:571-1474
    function customizeDialog(inputURL){
        return (
            <div>
            <Dialog
                open={openCustomizeDialog}
                onClose={handleClose}
                TransitionComponent={Transition}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use simpleURL's customized service"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <p>Your original URL is {inputURL}</p>
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Customize your Link"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>)
    }

    // if(load){
    //     return (
    //         <div className={"centerDivLoad"}>
    //             <LinearWithValueLabel value={2}/>
    //         </div>
    //     );
    // }



    return (
          <div className="App">
              <br/><br/><br/>
              {/*For generating the logo*/}
              <div className={"centerDiv"}>
                  <div className={"logo"} onClick={()=>{window.location.href = "/status"}} >
                      SimpleURL
                  </div>
              </div>

              <br/><br/>
              {/*For generating the url convert box */}
              <div className={"centerDiv"}>
                 <div id={"urlConvertBox"}>
                     <p className={"LargeBoldCenterP"} >Paste the URL to be simplified</p>
                     <div className={"displayInRowCenter"}>
                         <Box
                             sx={{
                                 width: "55%",
                                 maxWidth: '100%',
                             }}
                         >
                             <TextField
                                 fullWidth
                                 label = {returnErrorMessage(validURL, inputURL)}
                                 error = {checkError(validURL, inputURL)}

                                 onChange={event => setURLAndCheck(event)}
                                 id="longURLTextField" />
                         </Box>
                         <Button variant="outlined" disabled={disableButton(validURL, inputURL)} onClick={()=> handleShorten()}>Shorten It</Button>

                     </div>
                     <br/>

                     {validURL && inputURL ?
                         <div className={"centerDiv"}>
                            <p className={"regularNoBoldCenterClickP"} onClick={()=>{setOpenCustomizeDialog(true)}}>Need to customized your link?</p>
                         </div>
                         :<div></div>
                     }
                     {returnSuccessResult()}

                 </div>
              </div>
              {customizeDialog(inputURL)}

      </div>
    );
}

function checkError(validURL, inputURL){
    if(validURL){
        return false;
    } else if(inputURL === ""){
        return false;
    } else {
        return true;
    }
}

function returnErrorMessage(validURL, inputURL){
    if(validURL || !inputURL){
        return "";
    } else {
        return "The long URL is invalid!";
    }
}

function disableButton(validURL, inputURL){
    if(validURL && inputURL){
        return false;
    } else{
        return true;
    }
}

// source from https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
function checkValidURL(str){
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

export default App;
