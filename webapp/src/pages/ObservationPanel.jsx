import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';

import { ObseArray } from '../components/Obse/ObseArray';

function ObservationPanel() {
  return (

    <div>
      <div className="content-section introduction">
        <div className="feature-intro">
          <h1>List of observation  </h1>

        </div>
      </div>

      <div className="content-section implementation">


        <TabView>

          <TabPanel header="List Observations">
            <div>
          
              <ObseArray />
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
export default ObservationPanel;