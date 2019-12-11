
import React, {Component} from 'react';
import {Dropdown} from 'primereact/dropdown';
import DeviceService from '../DeviceService';
import sensors from "../../json/colibri";

export default class DeviceArray extends Component {

    constructor() {
        super();
        this.state = {
            caty: null,
            categorizesl: null,
            categorizes: [],
            groupsl: null,
            groups: [],
            groupse: [],
            groupy: null,
            lien: [],

            devicesl: null,
            devices: []
       };
        this.serviceactiv = new DeviceService();
        this.onDevicenCategorize = this.onDevicenCategorize.bind(this);
        this.onDevicenGroup = this.onDevicenGroup.bind(this);
        this.onDevicenDevice = this.onDevicenDevice.bind(this);

    }
    componentDidMount() {
        this.serviceactiv.getJson().then(datas => this.setState({ categorizes: datas}));
      // this.serviceactiv.getJson().then(datas => this.setState({ groups: datas.Environment}));
      // this.serviceactiv.getJson().then(datas => this.setState({ devices: datas.Environment.Weather}));
      console.log('didmount'+JSON.stringify(this.state.groupy))
      
    }

    onDevicenCategorize(event) {
        this.setState({ caty: event.value, groupse :event.value});
      this.UpdateGroup();


    }
    UpdateGroup(){
        this.serviceactiv.getJson().then(datas => this.setState({ groups: datas.Environment}));

        console.log('onCat2'+JSON.stringify(groups))
    }
 
    onDevicenGroup(event) {
        this.setState({ groupy: event.value});
    }

    onDevicenDevice(event) {
        this.setState({ devicy: event.value});
    }

    render() {

        let categorizesl = Object.keys(this.state.categorizes).map((icon) => {
            return { label: icon, value: icon };
        });
//let marche = (this.state.caty.label + '.' + this.state.groupy.label);
        let groupsl = Object.keys(this.state.groups).map((icon) => {
            return { label: icon, value: icon };
        });
       let devicesl = (this.state.devices).map((icon) => {
            return { label: icon.device_name, value: icon.device_name };
        });

        console.log('ddddddd'+JSON.stringify(this.state.groupy))


        return (
            <div>
                <div className="content-section implementation">
                    <h3>categories</h3>
                    <Dropdown value={this.state.caty} options={categorizesl} onChange={this.onDevicenCategorize} placeholder="Select a categories" optionLabel="label"/>
                    <div style={{marginTop: '.5em'}}>{this.state.caty ? 'Selected City: ' + this.state.caty.label : 'No city selected'}</div>
                </div>

                <div className="content-section implementation">
                    <h3>Group</h3>
                    <Dropdown value={this.state.groupy} options={groupsl} onChange={this.onDevicenGroup} placeholder="Select a group" optionLabel="label"/>
                    <div style={{marginTop: '.5em'}}>{this.state.groupy ? 'Selected City: '+ this.state.caty + '.' + this.state.groupy.label : 'No city selected'}</div>
                </div>

                <div className="content-section implementation">
                    <h3>Group</h3>
                    <Dropdown value={this.state.devicy} options={devicesl} onChange={this.onDevicenDevice} placeholder="Select a group" optionLabel="label"/>
                    <div style={{marginTop: '.5em'}}>{this.state.devicy ? 'Selected City: ' + this.state.devicy.label : 'No city selected'}</div>
                </div>

            </div>
        );
    }
}
