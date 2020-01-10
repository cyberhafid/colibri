import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { StrateArray } from '../components/Strat/StrateArray';
import { StrateList } from '../components/Strat/StrateList';

function StrategiePanel() {
  return (

    <div>
      <div className="content-section introduction">
        <div className="feature-intro">
          <h1>Strategie  </h1>

        </div>
      </div>

      <div className="content-section implementation">


        <TabView>

          <TabPanel header="Strategie active">
            <div>
          
              <StrateArray />
            </div>
          </TabPanel>


          <TabPanel header="List strategie">
            <div>
            <StrateList />
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
export default StrategiePanel;