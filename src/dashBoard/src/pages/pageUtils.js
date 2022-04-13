import {Alert, AlertTitle} from "@mui/material";

export function returnErrorMessage(matchedString){
    let error = matchedString.substring(matchedString.indexOf("/") + 1);
    return error.replaceAll("-", " ").replace(/^\w/, (c) => c.toUpperCase());
}

export function isShowError(errorMessage){

    if(errorMessage.includes("success")){
        return (<div></div>);
    }

    return (
        <div>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {errorMessage}
            </Alert>
        </div>
    );
}