import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import FitsViewer from '../components/Fit/FitViewer';


function FitsPanel() {
  return (

    <div>
      <div className="content-section introduction">
        <div className="feature-intro">
          <h1>fits  </h1>

        </div>
      </div>

      <div className="content-section implementation">


        <TabView>

          <TabPanel header="fits viewer">
            <div>
          <FitsViewer />

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
export default FitsPanel;