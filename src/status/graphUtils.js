import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    registerables as registerablesJS
} from 'chart.js';

import { Bar, Chart} from 'react-chartjs-2';
import DialogContentText from "@mui/material/DialogContentText";
import React from "react";
ChartJS.register(...registerablesJS);


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,

);
const bottomLabel = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

function randomDataPoint(startValue){
    let dataList = [];

    for(let i = startValue; i <= startValue*6; i += startValue){
        dataList.push(i);
    }
    dataList.push(startValue);
    return dataList;
}

export function generateClickBarView(){
    let oneView = {
        labels: [],
        datasets: []
    };


    oneView.labels = bottomLabel;
    oneView.datasets.push({
        type: 'bar',
        label: "dataset1",
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 0.5)',
        borderWidth: 1,
        pointRadius: 0,
        data: randomDataPoint(100),
    });

    oneView.datasets.push({
        type: 'bar',
        label: "dataset2",
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 0.5)',
        borderWidth: 1,
        pointRadius: 0,
        data: randomDataPoint(200),
    });

    return graphBarView(oneView, 1000)
}


export function generatePieView(){

    const data = {
        labels: ['CountryA', 'CountryB', 'CountryC', 'CountryD', 'CountryE', 'CountryF'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: ['#CB4335', '#1F618D', '#F1C40F', '#27AE60', '#884EA0', '#D35400'],
        }]
    };

    return pieView(data);
}

export function graphBarView(object, num){
    let title = `${num} clicks from 43 other SimplyURL`;
    return (
        <div id={"graphClickView"}>

            <div className={"statusClickTextFont"}>
                <DialogContentText id="alert-dialog-slide-description">
                    {title}
                </DialogContentText>
            </div>
            <Chart
                type='bar'
                data={object}
                options={{

                    title:{
                        display:true,
                        text:'Today\'s Confirm Rate',
                        fontSize:20
                    },
                    legend:{
                        display:true,
                        position:'right'
                    },
                    interaction: {
                        intersect: false,
                        mode: 'index',
                    },


                }}
            />
        </div>
    );
}




function handleHover(evt, item, legend) {
    legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
        colors[index] = index === item.index || color.length === 9 ? color : color + '4D';
    });
    legend.chart.update();
}

function handleLeave(evt, item, legend) {
    legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
        colors[index] = color.length === 9 ? color.slice(0, -2) : color;
    });
    legend.chart.update();
}

export function pieView(object){
    let title = "Locations";
    return(
        <div id={"graphPieView"}>
            <div className={"statusClickTextFont"}>
                <DialogContentText id="alert-dialog-slide-description">
                    {title}
                </DialogContentText>
            </div>

            <Chart
                type={'pie'}
                data={object}
                options={{
                    plugins: {
                        legend: {
                            onHover: handleHover,
                            onLeave: handleLeave
                        }
                    }
                }}
            />

        </div>
    );
}