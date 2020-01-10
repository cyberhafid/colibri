import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Slider } from 'primereact/slider';
export class StrateList extends Component {

    constructor() {
        super();
        this.state = {
            val3: null,

            datacam: [
                { datec: '2019-10-02T23:59:05', name: 'cagire start' },
                { datec: '2019-10-02T23:59:05', name: 'ddrago stop' },
                { datec: '2019-10-02T23:59:05', name: 'drago no communication' },
                { datec: '2019-10-02T23:59:05', name: 'cagire start' },
                { datec: '2019-10-02T23:59:05', name: 'ddrago stop' },
                { datec: '2019-10-02T23:59:05', name: 'drago no communication' },
                { datec: '2019-10-02T23:59:05', name: 'cagire start' },
                { datec: '2019-10-02T23:59:05', name: 'ddrago stop' },
                { datec: '2019-10-02T23:59:05', name: 'drago no communication' }

            ]
        };
        //   this.carservice = new CarService();


        this.actionSetup = this.actionSetup.bind(this);
        this.actionTemplate = this.actionTemplate.bind(this);
        this.onChangeSlider3 = this.onChangeSlider3.bind(this);
    }
    onChangeSlider3(e) {
        this.setState({ val3: e.value });
    }
    actionSetup(rowData, column) {
        return <div>
            <h5>Step: {this.state.val3}</h5>
            <Slider value={this.state.val3} onChange={this.onChangeSlider3} step={20} style={{ width: '14em' }} />

        </div>;
    }

    actionTemplate(rowData, column) {
        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success" style={{ marginRight: '.5em' }}></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
        </div>;
    }

    componentDidMount() {
        // this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {
        var carCount = this.state.datacam ? this.state.datacam.length : 0;
        var header = <div className="p-clearfix" style={{ 'lineHeight': '1.87em' }}>List of strategies <Button icon="pi pi-refresh" style={{ 'float': 'right' }} /></div>;
        var footer = "There are " + carCount + ' datacam';

        return (
            <div>


                <div className="content-section implementation">
                    <DataTable value={this.state.datacam} header={header} footer={footer}>
                        <Column field="datec" header="date" />
                        <Column field="name" header="action" />
                        <Column body={this.actionSetup} style={{ textAlign: 'center', width: '18em' }} />

                        <Column body={this.actionTemplate} style={{ textAlign: 'center', width: '8em' }} />
                    </DataTable>
                </div>
            </div>
        );
    }
}
