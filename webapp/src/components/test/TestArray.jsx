
import React, { Component } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import DeviceService from '../DeviceService';
import sensors from "../../json/colibri";
import axios from 'axios';
export default class TestArray extends Component {

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
            groupta: [],
            categorieli: null,
            categorieid: null,
     
        };
        this.serviceactiv = new DeviceService();
        this.onDevicenCategorize = this.onDevicenCategorize.bind(this);


    }
    componentDidMount() {
        this.serviceactiv.getJson().then(datas => this.setState({ categorieta: datas }));

       // console.log('didmount' + JSON.stringify(this.state.categorizes))

    }

    onDevicenCategorize(event) {

    }




    onDevicenCategorize(event) {
        this.setState({ categorieid: event.value});
       // console.log('categories state' + JSON.stringify(this.state.categorieid));
      if (this.state.categorieid) {

       // console.log((this.state.categorieid));
      
     console.log(Object.values(this.state.categorieid)[0]);
    
      //  this.setState({ groupid: event.value });
       // axios.get(`http://localhost:3000/users/${this.context.id}`)
     //  axios.get(`http://localhost:5000/categories/cat/${(Object.values(this.state.categorieid)[0])}`)
      axios.get(`http://localhost:5000/categories/cat`)

          .then(res => {
           // const mises = res.data;

            this.setState({
                groupta :res.data,
   
            
            });

            console.log('mises' + JSON.stringify(this.state.groupta));


          })

     


       
          .catch((err) => console.log(err));
        };
      }
    




    render() {

        let categorieli = Object.keys(this.state.categorieta).map((icon) => {
            return { label: icon, value: icon };
        });


       // console.log('render' + JSON.stringify(this.state.categorieli))
        let headerGroup = <ColumnGroup>

            <Row>
                <Column header="Filter" />
                <Column header="Image Master N" />
  
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



                    </div>
                </div>



                <div className="content-section implementation">
                    <DataTable value={this.state.categorieid} headerColumnGroup={headerGroup}>
                        <Column field="filter" />
                        <Column field="camOne" />
           
                    </DataTable>
                </div>
            </div>

        );
    }
}
