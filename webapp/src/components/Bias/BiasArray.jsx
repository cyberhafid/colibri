import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import { LineChart } from '../../pages/Graphiques/LineChart';
import { ComboChart } from '../../pages/Graphiques/ComboChart';

export class BiasArray extends Component {

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