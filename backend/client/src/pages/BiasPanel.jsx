import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { BiasArray } from '../components/Bias/BiasArray';

function BiasPanel() {
  return (

    <div>
      <div className="content-section introduction">
        <div className="feature-intro">
          <h1>Master Bias  </h1>
 
        </div>
      </div>

      <div className="content-section implementation">


        <TabView>

          <TabPanel header="Last Master Bias">
            <div>
              <BiasArray />
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
export default BiasPanel;