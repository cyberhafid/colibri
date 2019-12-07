 
import axios from 'axios';

export class DeviceService {

  getTyope() {
    return  axios
    .get('https://opendata.paris.fr/api/datasets/1.0/search/?q=handicap&rows=100'
  )
.then(res => res.data.datasets);
 }



}

