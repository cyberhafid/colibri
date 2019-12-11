
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
            caty: null,
            categorizesl: null,
            categorizes: [],
            groupsl: null,
            groups: [],
            groupse: [],
            groupy: null,
            devicesl: null,
            devices: []
        };
        this.serviceactiv = new DeviceService();
        this.onDevicenCategorize = this.onDevicenCategorize.bind(this);
        this.onDevicenGroup = this.onDevicenGroup.bind(this);
        this.onDevicenDevice = this.onDevicenDevice.bind(this);

    }
    componentDidMount() {
        this.serviceactiv.getJson().then(datas => this.setState({ categorizes: datas }));
        // this.serviceactiv.getJson().then(datas => this.setState({ groups: datas.Environment}));
        // this.serviceactiv.getJson().then(datas => this.setState({ devices: datas.Environment.Weather}));
        console.log('didmount' + JSON.stringify(this.state.groupy))

    }

    onDevicenCategorize(event) {
        this.setState({ caty: event.value, groupse: event.value });
        this.serviceactiv.getJson().then(datas => this.setState({ groups: datas.Environment }));
    }
    onDevicenGroup(event) {
        this.setState({ groupy: event.value });
    }

    onDevicenDevice(event) {
        this.setState({ devicy: event.value });
    }

    render() {

        let categorizesl = Object.keys(this.state.categorizes).map((icon) => {
            return { label: icon, value: icon };
        });
        let groupsl = Object.keys(this.state.groups).map((icon) => {
            return { label: icon, value: icon };
        });
        let devicesl = (this.state.devices).map((icon) => {
            return { label: icon.device_name, value: icon.device_name };
        });

        console.log('ddddddd' + JSON.stringify(this.state.groupy))
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
                            <Dropdown value={this.state.caty} options={categorizesl} onChange={this.onDevicenCategorize} placeholder="Select a categories" optionLabel="label" />
                            <div style={{ marginTop: '.5em' }}>{this.state.caty ? 'Selected City: ' + this.state.caty.label : 'No city selected'}</div>
                        </div>


                        <div className="col-sm-4">

                            <h3>Group</h3>
                            <Dropdown value={this.state.groupy} options={groupsl} onChange={this.onDevicenGroup} placeholder="Select a group" optionLabel="label" />
                            <div style={{ marginTop: '.5em' }}>{this.state.groupy ? 'Selected City: ' + this.state.caty + '.' + this.state.groupy.label : 'No city selected'}</div>
                        </div>

                        <div className="col-sm-4">

                            <h3>Device</h3>
                            <Dropdown value={this.state.devicy} options={devicesl} onChange={this.onDevicenDevice} placeholder="Select a device" optionLabel="label" />
                            <div style={{ marginTop: '.5em' }}>{this.state.devicy ? 'Selected City: ' + this.state.devicy.label : 'No city selected'}</div>
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
