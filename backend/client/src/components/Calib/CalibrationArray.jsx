import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {ColumnGroup} from 'primereact/columngroup';
import {Row} from 'primereact/row';
import { LineChart } from '../../pages/Graphiques/LineChart';
import { ComboChart } from '../../pages/Graphiques/ComboChart';

export class CalibrationArray extends Component {

    constructor() {
        super();
        this.state = {
            datacam: [
                {filter: 'FLAT'},
                {filter: 'Dark Level'},
                {filter: 'Zero Point'},
                {filter: 'Bias'}
       
            ]
        };
    }
    PlotCamOne(rowData, column) {
        return <div>
      	<LineChart />
        </div>;
    }
    PlotCamTwo(rowData, column) {
        return <div>
      	<ComboChart />
        </div>;
    }
    PlotCamThree(rowData, column) {
        return <div>
      	<LineChart />
        </div>;
    }

    render() {
        let headerGroup = <ColumnGroup>
                            <Row>
                                <Column header="Filter" rowSpan={2} />
                                <Column header="Camera" colSpan={3} />
                            </Row>
                            <Row>
                                <Column header="CAGIRE 1"  />
                                <Column header="CAGIRE 2" />
                                <Column header="DDRAGO" />
                            </Row>
                     
                        </ColumnGroup>;

        return (
            <div>
               
                     <div className="content-section implementation">
                         
                    <DataTable value={this.state.datacam} headerColumnGroup={headerGroup}>                        
                        <Column field="filter" />
                        <Column body={this.PlotCamOne} style={{textAlign:'center'}}/>
                        <Column body={this.PlotCamTwo} style={{textAlign:'center', width: '8em'}}/>
                        <Column body={this.PlotCamThree} style={{textAlign:'center', width: '8em'}}/>
                    </DataTable>
               
                </div>
            </div>
        );
    }
}