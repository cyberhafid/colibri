
import React, { Component } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
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

            categorieta: [],
            categorieli: null,
            categorieid: null,
            groupta: [],
            groupli: null,
            groupid: null,
            deviceta: [],
            deviceli: null,
            deviceid: null,
        };
        this.serviceactiv = new DeviceService();
        this.onDevicenCategorize = this.onDevicenCategorize.bind(this);
        this.onDevicenGroup = this.onDevicenGroup.bind(this);
        this.onDevicenDevice = this.onDevicenDevice.bind(this);

    }
    componentDidMount() {
        this.serviceactiv.getJson().then(datas => this.setState({ categorieta: datas }));
       this.serviceactiv.getJson().then(datas => this.setState({ groupta: datas.Environment}));
       this.serviceactiv.getJson().then(datas => this.setState({ deviceta: datas.Environment.Weather}));
       // console.log('didmount' + JSON.stringify(this.state.categorizes))

    }

    onDevicenCategorize(event) {
        this.setState({ categorieid: event.value, groups: event.value });
        this.serviceactiv.getJson().then(datas => this.setState({ groupta: datas.Environment }));
    }
    onDevicenGroup(event) {
        this.setState({ groupid: event.value });
    }

    onDevicenDevice(event) {
        this.setState({ deviceid: event.value });
    }

    render() {

        let categorieli = Object.keys(this.state.categorieta).map((icon) => {
            return { label: icon, value: icon };
        });
        let groupli = Object.keys(this.state.groupta).map((icon) => {
            return { label: icon, value: icon };
        });
        let deviceli = (this.state.deviceta).map((icon) => {
            return { label: icon.device_name, value: icon.device_name };
        });

        console.log('ddddddd' + JSON.stringify(this.state.categorieid))
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
            <div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">

                            <h3>categories</h3>
                            <Dropdown value={this.state.categorieid} options={categorieli} onChange={this.onDevicenCategorize} placeholder="Select a categories" optionLabel="label" />
                            <div style={{ marginTop: '.5em' }}>{this.state.categorieid ? 'Selected City: ' + this.state.categorieid.label : 'No city selected'}</div>
                        </div>


                        <div className="col-sm-4">

                            <h3>Group</h3>
                            <Dropdown value={this.state.groupid} options={groupli} onChange={this.onDevicenGroup} placeholder="Select a group" optionLabel="label" />
                            <div style={{ marginTop: '.5em' }}>{this.state.groupid ? 'Selected City: ' + this.state.groupid.label + '.' + this.state.groupid.label : 'No city selected'}</div>
                        </div>

                        <div className="col-sm-4">

                            <h3>Device</h3>
                            <Dropdown value={this.state.deviceid} options={deviceli} onChange={this.onDevicenDevice} placeholder="Select a device" optionLabel="label" />
                            <div style={{ marginTop: '.5em' }}>{this.state.deviceid ? 'Selected City: ' + this.state.deviceid.label : 'No city selected'}</div>
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
