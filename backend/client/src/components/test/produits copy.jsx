
import React, { Component } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import {  Col } from 'react';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import DeviceService from '../DeviceService';
import sensors from "../../json/colibri";
import logo from './logo192.png'; 
import AtomicImage from './AtomicImage';

export default class Produits extends Component {

    constructor() {
        super();
        this.state = {
            datacam: [
                { filter: 'FLAT', camOne: 'PLOTS', camTwo: '40%', camThree: '$54,406.00' },
                { filter: 'Dark Level', camOne: 'PLOTS', camTwo: '40%', camThree: '$54,406.00' },
                { filter: 'Zero Point', camOne: 'PLOTS', camTwo: '40%', camThree: '$54,406.00' },
                { filter: 'Seings Quality', camOne: 'PLOTS', camTwo: '40%', camThree: '$54,406.00' },
                { filter: 'Dithering', camOne: 'PLOTS', camTwo: '40%', camThree: '$54,406.00' },
                { filter: 'Number Picter', camOne: 'PLOTS', camTwo: '40%', camThree: '$54,406.00' },
                { filter: 'Strategie', camOne: 'PLOTS', camTwo: '40%', camThree: '$54,406.00' },
                { filter: 'List of Picture', camOne: 'PLOTS', camTwo: '40%', camThree: '$54,406.00' }

            ],


        };
        this.serviceactiv = new DeviceService();
        this.actionTemplate = this.actionTemplate.bind(this);
        this.actionSize = this.actionSize.bind(this);
        this.imageDimensions = this.imageDimensions.bind(this);
        
     

    }
    componentDidMount() {
        this.serviceactiv.getJson().then(datas => this.setState({ categorieta: datas }));

       // console.log('didmount' + JSON.stringify(this.state.categorizes))

    }

    actionTemplate(rowData, column) {
        var src = {logo};
        return <img src={logo} alt={logo} width="48px" />;
    }

    async imageDimensions(uri) {
        return new Promise((resolve, reject) => {
          Image.getSize(uri, (width, height) => {
            resolve({ width: width, height: height });
          }, (error) => { reject(error) });
        });
      }
    actionSize(rowData, column) {
       return <AtomicImage src={logo}/> 
    };

    brandTemplate(rowData, column) {
        var src = "showcase/resources/demo/images/car/" + rowData.brand + ".png";
        return <img src={src} alt={rowData.brand}/>;
    }

    actionTemplate(rowData, column) {
 /*        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success"></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
        </div>; */
    }


    render() {
 




      //  console.log('ddddddd' + JSON.stringify(this.state.categorieid))

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

        return (
            <DataTable value={this.state.datacam} headerGroup={headerGroup} >
            <Column field="vin" header="Vin" />
            <Column field="year" header="Year" />
            <Column field="brand" header="Brand" body={this.brandTemplate} style={{textAlign:'center'}}/>
            <Column field="color" header="Color" body={this.colorTemplate} />
            <Column body={this.actionTemplate} style={{textAlign:'center', width: '6em'}}/>
        </DataTable>

        );
    }
}
