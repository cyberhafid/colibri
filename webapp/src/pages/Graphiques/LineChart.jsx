import React, {Component} from 'react';
import {Chart} from 'primereact/chart';

export class LineChart extends Component {

    render() {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: '#42A5F5',
                    borderColor: '#42A5F5'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor: '#66BB6A',
                    borderColor: '#66BB6A'
                }
            ]   
        };

        const multiAxisData = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
                label: 'Dataset 1',
                fill: false,
				backgroundColor: '#42A5F5',
                borderColor: '#42A5F5',
				yAxisID: 'y-axis-1',
				data: [65, 59, 80, 81, 56, 55, 10]
			}, {
                label: 'Dataset 2',
                fill: false,
				backgroundColor: '#66BB6A',
                borderColor: '#66BB6A',
				yAxisID: 'y-axis-2',
				data: [28, 48, 40, 19, 86, 27, 90]
			}]
        };

        const multiAxisOptions = {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            scales: {
                yAxes: [{
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                        drawOnChartArea: false
                    }
                }]
            }
        }

        const lineStylesData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#42A5F5'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderDash: [5, 5],
                    borderColor: '#66BB6A'
                },
                {
                    label: 'Third Dataset',
                    data: [12, 51, 62, 33, 21, 62, 45],
                    fill: true,
                    borderColor: '#FFA726',
                    backgroundColor: '#FFCC80'
                }
            ]   
        };

        return (
            <div>
        
                <div className="content-section implementation">
         
                    <h3>Line Styles</h3>
                    <Chart type="line" data={lineStylesData}  />
                </div>
            </div>
        )
    }
}