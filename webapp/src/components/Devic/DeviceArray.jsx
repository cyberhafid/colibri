import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import {Dropdown} from 'primereact/dropdown';
import { DeviceService } from '../DeviceService';
export class DeviceArray extends Component {

    constructor() {
        super();
        this.state = {
            datacam: [
                { filter: 'FLAT', camOne: 'PLOTS', camTwo: '40%', camThree: '$54,406.00' },
                { filter: 'Dark Level' , camOne: 'PLOTS', camTwo: '40%', camThree: '$54,406.00' },
                { filter: 'Zero Point', camOne: 'PLOTS', camTwo: '40%', camThree: '$54,406.00' },
                { filter: 'Seings Quality' , camOne: 'PLOTS', camTwo: '40%', camThree: '$54,406.00' },
                { filter: 'Dithering' , camOne: 'PLOTS', camTwo: '40%', camThree: '$54,406.00' },
                { filter: 'Number Picter' , camOne: 'PLOTS', camTwo: '40%', camThree: '$54,406.00' },
                { filter: 'Strategie' , camOne: 'PLOTS', camTwo: '40%', camThree: '$54,406.00' },
                { filter: 'List of Picture', camOne: 'PLOTS', camTwo: '40%', camThree: '$54,406.00' }

            ]
        };
        this.serviceactiv = new DeviceService();
    }


    componentDidMount() {
        this.serviceactiv.getTyope().then(data => this.setState({ services: data }));
    }


    render() {
        let headerGroup = <ColumnGroup>
     
            <Row>
            <Column header="Filter" />

                <Column header="Image Master N" />
                <Column header="Image Master N +1" />
                <Column header="Proposition" />
                <Column header="Diff Master" />
                <Column header="Moy Master" />
                <Column header="Validation" />
            </Row>
        </ColumnGroup>;

const cities = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
];

console.log('ddddddd'+JSON.stringify(this.state.services))


        return (
            <div>

<div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <h5>Date Start</h5>
           
                    <Dropdown optionLabel="name" value={this.state.city} options={cities} onChange={(e) => {this.setState({city: e.value})}} placeholder="Select a City"/>
                </div>

             
            </div>
        </div>

                <div className="content-section implementation">

                    <DataTable value={this.state.datacam} headerColumnGroup={headerGroup}>
                        <Column field="filter" />
                         <Column field="camOne" />
                        <Column field="camTwo" />
                        <Column field="camThree" />
                        <Column field="camOne" />
                        <Column field="camTwo" />
                        <Column field="camThree" />
                    </DataTable>
                </div>
            </div>
        );
    }
}