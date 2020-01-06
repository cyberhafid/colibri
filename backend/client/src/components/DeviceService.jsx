 
import axios from 'axios';
import listedevice  from '../json/sensors.json';
const data = require('../json/colibri');

export default class DeviceService {

  //export class HandiService {


getDeviceName() {
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


async getJson() {
  return await data
}

}
