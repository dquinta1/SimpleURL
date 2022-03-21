import React, { Component }from 'react';
import {divider, statusNavBarWidget} from "../../status/statusPageWidgets";
import Pricing, {footer} from "./priceTemplate";

export default class Price extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
                {statusNavBarWidget()}
                {divider()}
                {Pricing()}
                <br/><br/><br/>
                {divider()}
                {footer()}
            </div>
        );
    }
}