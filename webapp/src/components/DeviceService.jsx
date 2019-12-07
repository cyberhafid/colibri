 
import axios from 'axios';
//import {listedevice  from '../json/sensors.json';

export  class DeviceService {




getDeviceName() {
  const listedevice = require('../json/sensors.json');
  return  axios
  .get(listedevice
)

.then(res => res.data.entities);
}

getTyope() {
  return  axios
  .get('https://opendata.paris.fr/api/datasets/1.0/search/?q=handicap&rows=100'
)
.then(res => res.data.datasets);
}



}

