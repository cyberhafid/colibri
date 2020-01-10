
import React, { Component } from 'react';
import { Table } from 'reactstrap';
//import DeviceService from '../DeviceService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
//import { ColumnGroup } from 'primereact/columngroup';
//import {Row} from 'primereact/row';
//import Fits from './FITSreact';
import filefits from './c2f.fits';
import { Dropdown } from 'primereact/dropdown';

export default class Sourcenodefits extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      primary: {},
      extensions: [],
      images: [],
      tables: []

    };
    this.bodyTemplate = this.bodyTemplate.bind(this);
    this.onclick = this.onclick.bind(this);
  }
  componentDidMount() {
    //    this.serviceactiv.getJson().then(datas => this.setState({ categorieta: datas }));
    // console.log('didmount' + JSON.stringify(this.state.categorizes))


  }


  onclick() {
    fetch(filefits)
      .then((response) => {
        return response.text();
      }).then((data) => {
        data = data.toString(); //
        for (var i = 0; i < (data.length / 80); i++) {
          let line = data.substring(i * 80, (i * 80) + 80);
          //console.log('une state go' + JSON.stringify(line));

          if (line.indexOf("=") != -1) {
            let main = line.split('/'); let prop = main[0].split('=');
            //  console.log(prop[0].trim() + ' = ' + prop[1].trim()); // data
            // console.log(prop[0].trim() + ' = ' + main[1].trim()); // metadata
            //  headerBlock[prop[0].trim()] = prop[1].trim();
            //   this.setState({ tables: data })
            this.setState({
              tables: [prop[0].trim(), prop[1].trim()]
            });
            //console.log(this.state.tables); // data


          }
          else { return ('FITS HDU is faulty: ' + line); }


        }


        // this.setState({ data: data });
      })
  };

  bodyTemplate(rowData, props) {
    var examMark = this.state.tables[0];
    return examMark;
  }
  render() {
/* 
    let columns = this.state.tables.map((col,i) => {
      return <Column key={col.field} field={col.field} header={col.header} />;
  });

    let tables =(this.state.data).map((icon) => {
      return [{ label: icon.value, value: icon.key }];
    });
 */

    const tables = this.state.data.map((col,i) => {
      return <Column key={col.field} field={col[0]} header={col.header} />;
  });
 console.log('une state go' + JSON.stringify(this.state.tables));
    return (
      <div className="content-section implementation" >
        <h2>{
      //  console.log('une state go' + JSON.stringify(this.state.tables))
        }</h2>
        <button onClick={this.onclick}>click string</button>`


        <DataTable value={this.state.cars}>
                        {tables}
                    </DataTable>



      </div>



    );
  }
}
