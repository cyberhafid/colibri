
import React, {Component} from 'react';
import {Dropdown} from 'primereact/dropdown';
import DeviceService from '../DeviceService';

export default class DeviceArray extends Component {

    constructor() {
        super();
        this.state = {
            city: null,
            categorizesl: null,
            categorizes: []
        };
        this.serviceactiv = new DeviceService();
        this.onCityChange = this.onCityChange.bind(this);
        this.onDevicenCategorize = this.onDevicenCategorize.bind(this);

    }
    componentDidMount() {
        this.serviceactiv.getJson().then(datas => this.setState({ categorizes: datas}));

   }

    onCityChange(e) {
        this.setState({city: e.value});
    }

    onDevicenCategorize(event) {
        this.setState({ caty: event.value});
    }
 

    render() {
        const cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];

        let categorizesl = Object.keys(this.state.categorizes).map((icon) => {
            return { label: icon, value: icon };
        });



        console.log(JSON.stringify(this.state.categorizes));

        return (
            <div>


                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <Dropdown value={this.state.city} options={cities} onChange={this.onCityChange} placeholder="Select a City" optionLabel="name"/>
                    <div style={{marginTop: '.5em'}}>{this.state.city ? 'Selected City: ' + this.state.city.name : 'No city selected'}</div>

                </div>


                <div className="content-section implementation">
                    <h3>categories</h3>
                    <Dropdown value={this.state.caty} options={categorizesl} onChange={this.onDevicenCategorize} placeholder="Select a categories" optionLabel="label"/>
                    <div style={{marginTop: '.5em'}}>{this.state.caty ? 'Selected City: ' + this.state.caty.label : 'No city selected'}</div>

                </div>


            </div>
        );
    }
}
