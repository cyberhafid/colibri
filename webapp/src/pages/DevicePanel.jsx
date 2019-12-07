import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { DeviceArray } from '../components/Devic/DeviceArray';

function DevicePanel() {
  return (

    <div>
      <div className="content-section introduction">
        <div className="feature-intro">
          <h1>List of device  </h1>

        </div>
      </div>

      <div className="content-section implementation">


        <TabView>

          <TabPanel header="List devices">
            <div>
          
              <DeviceArray />
            </div>
          </TabPanel>
          <TabPanel header="Last operation">
            <div>
          
            </div>
          </TabPanel>

          <TabPanel header="Alert">
            <div>
          
            </div>
          </TabPanel>


          <TabPanel header="Informations">
            <div>

            </div>

          </TabPanel>



        </TabView>
      </div>
    </div>
  );
}
export default DevicePanel;