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

---------------------------------------------recup URL  


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
//je place le resultat dans un objet avec des champs només
  return items.map(({
    id, full_name, html_url, description
  }) => ({
    id,
    name: full_name,
    url: html_url,
    description
  }));
}

---------------------------------------------------BASE SIMPLE STATE JSON
}
componentDidMount() {
  this.getTyope().then(data => this.setState({ items: data }));
}

getTyope() {
  return  axios
  .get('http://localhost:5000/sensors/device/Environment'
)
.then(res => res.data.Environment);
}
-----------------------------------------RECUPERATION VARIABLE
let endpoint = Object.values(this.state.categorieid)[0]; 


// onst response = await fetch(`${API}${endpoint}`, {

  axios.get(`${endpoint}`)