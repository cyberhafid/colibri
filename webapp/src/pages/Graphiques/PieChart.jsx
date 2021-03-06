import React, {Component} from 'react';
import {Chart} from 'primereact/chart';

export class PieChart extends Component {

    render() {
        const data = {
            labels: ['A','B','C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]    
            };

        return (
            <div>
     

                <div className="content-section implementation">
                <Chart type="pie" data={data} />
                </div>
            </div>
        )
    }
}