
import React, { Component } from 'react';
import { Table } from 'reactstrap';
import DeviceService from '../DeviceService';
import sensors from "../../json/colibri";
import logo from './logo192.png'; 
import logo2 from './nasa.png'; 
import AtomicImage from './AtomicImage';

export default class Produits extends Component {

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


        };
        this.serviceactiv = new DeviceService();
        this.actionTemplate = this.actionTemplate.bind(this);
        this.actionSize = this.actionSize.bind(this);
        this.imageDimensions = this.imageDimensions.bind(this);
        
     

    }
    componentDidMount() {
        this.serviceactiv.getJson().then(datas => this.setState({ categorieta: datas }));

       // console.log('didmount' + JSON.stringify(this.state.categorizes))

    }

    actionTemplate(rowData, column) {
        var src = {logo};
        return <img src={logo} alt={logo} width="48px" />;
    }

    async imageDimensions(uri) {
        return new Promise((resolve, reject) => {
          Image.getSize(uri, (width, height) => {
            resolve({ width: width, height: height });
          }, (error) => { reject(error) });
        });
      }
    actionSize(rowData, column) {
       return <AtomicImage src={logo}/> 
    };

    render() {

     
        return (
            <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>First picture</th>
                <th>Second picture</th>
                <th>Difference</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">source</th>
                <td><AtomicImage src={logo}/></td>
                <td><AtomicImage src={logo2}/></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">SIZE</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              
            </tbody>
          </Table>

        );
    }
}