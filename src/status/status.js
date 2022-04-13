import React, { Component }from 'react';
import './status.css'
import {displayTwoItemsInOneRow, divider, shortURLText, statusNavBarWidget} from "./statusPageWidgets";
import {generateClickBarView, generatePieView} from "./graphUtils";
import {footer} from "../navBar/price/priceTemplate";
export default class Status extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                {statusNavBarWidget()}
                {divider()}
                {shortURLText()}
                {divider()}
                {displayTwoItemsInOneRow(generateClickBarView(), generatePieView())}
                {divider()}
                {footer()}
            </div>
        )
    }
}