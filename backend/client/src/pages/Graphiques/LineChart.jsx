import React, {Component} from 'react';
import {Chart} from 'primereact/chart';

export class LineChart extends Component {

    render() {




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
         
                    <p>Line Styles</p>
                    <Chart type="line" data={lineStylesData}  />
                </div>
            </div>
        )
    }
}