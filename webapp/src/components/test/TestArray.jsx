
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

            ]


     
        };



    }
    componentDidMount() {

        this.fetchTrendingRepositories();
    }


    fetchTrendingRepositories = async () => {
        const { data: { items } } = await axios({
          baseURL: 'https://api.github.com/',
          url: "/search/repositories",
          params: {
            sort: 'stars',
            order: 'desc',
            q: 'language:javascript created:>2018-04-15',
          }
        })
      console.log(items);
        return items.map(({
          id, full_name, html_url, description
        }) => ({
          id,
          name: full_name,
          url: html_url,
          description
        }));
      }





    render() {

        return (
            <div>
                <div className="content-section implementation">
      
                </div>
            </div>

        );
    }
}
