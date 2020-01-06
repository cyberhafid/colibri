import React, { useState, useEffect } from "react";
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import listedevice  from '../../json/colibri';

const DeviceArray = () => {
  const [hasError, setErrors] = useState(false);


  useEffect(() => {

  async function getJson() {
         return await listedevice; 
    }

    function getCat() {
    categorieli = Object.keys(listedevice).map((icon) => {
        return { label: icon, value: icon };
    });
    }



    getCat();
    getJson();

  });

  return (
    <div>

    <div className="container">
        <div className="row">




        </div>
    </div>



    <div className="content-section implementation">
    <div>
      <span>{JSON.stringify(categorieli)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
    </div>
</div>
  );
};
export default DeviceArray;