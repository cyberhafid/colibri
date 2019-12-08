import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import { Dropdown } from 'primereact/dropdown';
import DeviceService from '../DeviceService';
import sensors from "../../json/sensors";

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
            services: [],
            devicen: null,
            deviceg: null,
            devicee: null
        };
        this.serviceactiv = new DeviceService();
        this.onDevicenName = this.onDevicenName.bind(this);
        this.onDevicenGroup = this.onDevicenGroup.bind(this);

    }


    componentDidMount() {
        this.serviceactiv.getTyope().then(data => this.setState({ services: data }));

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

        //let brands = this.state.services;
        let devicen = sensors.entities.map((icon) => {
            return { label: icon.device_name, value: icon.device_name };
        });

        let deviceg = sensors.entities.map((icon) => {
            return {  label: icon.device_group, value: icon.device_group };
        });


        let deviceg2 = sensors.entities.map((a) => {
            //console.log('aaaaddaa' + JSON.stringify(icon.device_group));
            return (a.device_group)
         }  
        );

        let deviceg3 = sensors.entities.filter((a) => a.device_group === a.device_group).map((a) => {
            //console.log('aaaaddaa' + JSON.stringify(icon.device_group));
            return (a.device_group)
         }  
        );

        let deviceg4 = sensors.entities.filter((a) => a.device_group === a.device_group).map((a) => {
            //console.log('aaaaddaa' + JSON.stringify(icon.device_group));
            return (a.device_group)
         }  
        );
        let getMapFromArray = deviceg.reduce((acc, item) => {
                 acc[item.device_group] = { type: item.device_group };
      
          return acc;
        }, {});
      
        let newTab = [...new Set(deviceg2)]; 

        let tableauAvecDoublons = deviceg;
        let tableauSansDoublon = Array.from(new Set(newTab));
       // console.table(tableauSansDoublon); // [1, 2, 3, 4, 5, 6]


    var cache = {};
    let monTableau = deviceg.filter(function(elem,index,array){
        return cache[elem.label]?0:cache[elem.label]=1;
    });
    // affichage
    console.log(JSON.stringify(tableauSansDoublon));
      
      // console.log('aaaaddaa' + JSON.stringify(deviceg4))
        //console.log('ddddddd'+JSON.stringify(sensors))

        

        return (
            <div>
     
                <div className="container">
                    <div className="row">
                    <div className="col-sm-5">
                            <h5>Device Group </h5>
                            <Dropdown style={{width: '100%'}} value={this.state.deviceg} options={deviceg} onChange={this.onDevicenName} placeholder="Select a Device Name" />

                            </div>
                        <div className="col-sm-4">
                            <h5>Device name</h5>
                            <Dropdown value={this.state.devicen} options={devicen} onChange={this.onDevicenName} placeholder="Select a Device Name" />
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