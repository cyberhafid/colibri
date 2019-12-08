import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import {Dropdown} from 'primereact/dropdown';
import   DeviceService  from '../DeviceService';
import sensors from "../../json/sensors"; 

export default class DeviceArray extends Component {

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

            ],
            services :[],
            brand: null
        };
        this.serviceactiv = new DeviceService();
        this.onBrandChange = this.onBrandChange.bind(this);

    }


    componentDidMount() {
        this.serviceactiv.getTyope().then(data => this.setState({ services: data }));
         
    }

    onBrandChange(event) {
        this.setState({brands: event.value});
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

        //let brands = this.state.services;
        let brands = sensors.entities.map((icon) => {
          return { label: icon.device_name, value: icon.device_name };
        });


          console.log('aaaaaa'+JSON.stringify(brands))




//console.log('ddddddd'+JSON.stringify(this.state.devices))
//console.log('ddddddd'+JSON.stringify(sensors))


        return (

     

            <div>

<div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <h5>Date Start</h5>
           
                    <Dropdown value={this.state.brands} options={brands} onChange={this.onBrandChange} placeholder="Select a City"/>
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