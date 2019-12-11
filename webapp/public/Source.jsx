------------------------------------------------------------HOOK
import React, { useState, useEffect } from "react";
//import listedevice  from '../json/sensors.json';

const DeviceArray = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://swapi.co/api/planets/4/");
      res
        .json()
        .then(res => setPlanets(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  });

  return (
    <div>
      <span>{JSON.stringify(planets)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
export default DeviceArray;
-------------------------------------------------------------------JSON SUPPRESSION DOUBLON ENTETE

let tableauAvecDoublons = sensors.entities.map((a) => {
    //console.log('aaaaddaa' + JSON.stringify(icon.device_group));
    return (a.device_group)
 }  
);

let deviceg = Array.from(new Set(tableauAvecDoublons));
let deviceoptions = deviceg.map(v => ({
    label: v, value: v
  }));

  ----------------------------------------------------------------- rECUP JSON AVEC FICHIER EXT

  import { DeviceService } from '../../DeviceService';
export class DeviceArray extends Component {
    constructor() {
        super();
        this.state = {
 
            services :[]
        };
        this.serviceactiv = new DeviceService();
    }
    componentDidMount() {
        this.serviceactiv.getTyope().then(data => this.setState({ services: data }));
    }

    getTyope() {
        return  axios
        .get('https://opendata.paris.fr/api/datasets/1.0/search/?q=handicap&rows=100'
      )
      .then(res => res.data.datasets);
      }
      
      
      async getJson() {
        return await data
      }
-------------------------------------------------------------

let getMapFromArray = deviceg.reduce((acc, item) => {
    acc[item.device_group] = { type: item.device_group };

return acc;
}, {});