import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {ColumnGroup} from 'primereact/columngroup';
import {Row} from 'primereact/row';

export class CalibrationArray extends Component {

    constructor() {
        super();
        this.state = {
            datacam: [
                {filter: 'FLAT', camOne: 'PLOTS', camTwo: '40%', camThree: '$54,406.00'},
                {filter: 'Dark Level', camOne: '83%', camTwo: '96%', camThree: '$423,132'},
                {filter: 'Zero Point', camOne: '38%', camTwo: '5%', camThree: '$12,321'},
                {filter: 'Bias', camOne: '49%', camTwo: '22%', camThree: '$745,232'}
       
            ]
        };
    }

    render() {
        let headerGroup = <ColumnGroup>
                            <Row>
                                <Column header="Filter" rowSpan={3} />
                                <Column header="Camera" colSpan={3} />
                            </Row>
                            <Row>
                                <Column header="Camera 1"  />
                                <Column header="Camera 2" />
                                <Column header="CAGGIR" />
                            </Row>
                     
                        </ColumnGroup>;

        return (
            <div>
               
                     <div className="content-section implementation">
                    <DataTable value={this.state.datacam} headerColumnGroup={headerGroup}>                        
                        <Column field="filter" />
                        <Column field="camOne" />
                        <Column field="camTwo" />
                        <Column field="camThree" />

                    </DataTable>
               
                </div>
            </div>
        );
    }
}