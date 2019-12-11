import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import { Dropdown } from 'primereact/dropdown';
import DeviceService from '../DeviceService';
import sensors from "../../json/colibri";

export default class DeviceArray extends Component {

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
            categories: [
                { name: 'FLAT', details: 'PLOTS', },
                { name: 'FLAT2', details: 'PLOTS', }


            ],
            categorizes: [],
           
            services: [],
            users: [],
            categorize:null,
            devicen: null,
            group:[]
        };
        this.serviceactiv = new DeviceService();
        this.onDevicenName = this.onDevicenName.bind(this);
        this.onDevicenGroup = this.onDevicenGroup.bind(this);
        this.onDevicenCategorize = this.onDevicenCategorize.bind(this);


    }


    componentDidMount() {
         this.serviceactiv.getJson().then(datas => this.setState({ categorizes: datas}));

         this.serviceactiv.getJson().then(datas => this.setState({ devices: datas.Environment.Weather}));
    }


    onDevicenCategorize(event) {
        this.setState({ categorize: event.value});
        //console.log(JSON.stringify(this.state.categories));

       // this.serviceactiv.getJson().then(datas => this.setState({ groupe: datas.this.state.categorize}));
    }

    onDevicenName(event) {
        this.setState({ devicen: event.value });
    }
    onDevicenGroup(event) {
        this.setState({ deviceg: event.value });
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



        let categorizesl = Object.keys(this.state.categorizes).map((icon, key) => {
            return { label: icon, value: icon.key };
        });

       // let groupl = this.state.categories.map((icon) => {
         //   return { label: icon, value: icon };
        //});

        console.log(JSON.stringify(categorizesl));
    


        return (
            <div>


                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <h5>Categorize</h5>
                            <Dropdown style={{ width: '100%' }} value={this.state.categories} options={categorizesl} onChange={this.onDevicenCategorize} placeholder="Select a Device Name" />
                        </div>
                        <div className="col-sm-4">
                            <h5>Group</h5>
                          
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