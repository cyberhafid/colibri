import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
//import {CarService} from '../service/CarService';

export class ObseArray extends Component {

    constructor() {
        super();
        this.state = {
 
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

            ],
        };
     //   this.carservice = new CarService();

        this.colorTemplate = this.colorTemplate.bind(this);
        this.actionTemplate = this.actionTemplate.bind(this);
    }

    colorTemplate(rowData, column) {
        return <span style={{color: rowData['color']}}>{rowData['color']}</span>;
    }



    actionTemplate(rowData, column) {
        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success" style={{marginRight: '.5em'}}></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
        </div>;
    }

    componentDidMount() {
       // this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {
        var carCount = this.state.datacam ? this.state.datacam.length: 0;
        var header = <div className="p-clearfix" style={{'lineHeight':'1.87em'}}>List of datacam <Button icon="pi pi-refresh" style={{'float':'right'}}/></div>;
        var footer = "There are " + carCount + ' datacam';

        return (
            <div>


                <div className="content-section implementation">
                    <DataTable value={this.state.datacam} header={header} footer={footer}>
                        <Column field="datec" header="date" />
                        <Column field="name" header="action" />
    
                        <Column field="color" header="details" body={this.colorTemplate} />
                        <Column body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
                    </DataTable>
                </div>
            </div>
        );
    }
}
