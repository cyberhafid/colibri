
import React, { Component } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import axios from 'axios';
const data = require('../../colibri.json');
let baseURL= 'http://localhost:5000/sensors/';

export default class TestArray extends Component {

  constructor() {
    super();
    this.state = {
      categorieta: [],
      categorieli: null,
      categorieid: null,
      groupta: [],
      groupli: null,
      groupid: null,
    };
    this.onCategorizeGroup = this.onCategorizeGroup.bind(this);
    this.getCategories = this.getCategories.bind(this);
    this.getGroups = this.getGroups.bind(this);
    this.onGroupDevice = this.onGroupDevice.bind(this);
  }
  componentDidMount() {
    this.getCategories().then(datas => this.setState({ categorieta: datas }));
  }

  getCategories() {
    return axios
      .get(baseURL)
      .then(res => res.data);
  }

  onCategorizeGroup(event) {
    this.setState({ categorieid: event.value });
    this.getGroups();
   // console.log('onCategorizeGroup' + JSON.stringify(this.state.))
  }


  getGroups() {
    //let endpoint = this.state.categorieid; 
  //  let endpoint = Object.values(categorieid); 
  //console.log('getGroups' + JSON.stringify(Object.keys(this.state.categorieid)));
 // console.log(Object.values(this.state.categorieid)[0]);
 //let endpoint = (baseURL + Object.values(this.state.categorieid)); 
 //console.log('getGroups' + JSON.stringify(endpoint));
    return axios
      .get('http://localhost:5000/sensors/Environment')
      .then(res => (
      //  res.data.categorieid,
        this.setState({ groupta: data.Environment})
       
     )
      );
  }




  onGroupDevice(event) {
    this.setState({ groupid: event.value });
  }



  render() {
    let categorieli = Object.keys(this.state.categorieta).map((icon) => {
      return { label: icon, value: icon };
    });

    let groupli = Object.keys(this.state.groupta).map((icon) => {
      return { label: icon, value: icon };
    });

    console.log('groupid' + JSON.stringify(this.state.groupid))

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
              <Dropdown value={this.state.categorieid} options={categorieli} onChange={this.onCategorizeGroup} placeholder="Select a categories" optionLabel="label" />
              <div style={{ marginTop: '.5em' }}>{this.state.categorieid ? 'Selected categories: ' + this.state.categorieid.label : 'No categories selected'}</div>
            </div>


            <div className="col-sm-4">
              <h3>Groups</h3>
              <Dropdown value={this.state.groupid} options={groupli} onChange={this.onGroupDevice} placeholder="Select a Group" optionLabel="label" />
              <div style={{ marginTop: '.5em' }}>{this.state.groupid ? 'Selected Group: ' + this.state.groupid.label : 'No Group selected'}</div>
            </div>


          </div>
        </div>



        <div className="content-section implementation">
          <DataTable value={groupli} headerColumnGroup={headerGroup}>
            <Column field="vbvb" />
            <Column field="value" />

          </DataTable>
        </div>
      </div>

    );
  }
}
