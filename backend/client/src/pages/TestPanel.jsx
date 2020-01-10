import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import TestArray from '../components/test/TestArray';
import Produits from '../components/test/produits';
import FitsViewer from '../components/Fit/FitViewer';
import Fireflies from '../components/Fireflies/Fireflies';
import Sourcenoefits from '../components/test/sourcenodefits';

function TestPanel() {
  return (

    <div>
      <div className="content-section introduction">
        <div className="feature-intro">
          <h1>List of device  </h1>
        </div>
      </div>
      <div className="content-section implementation">

        <TabView>
        <TabPanel header="nodesource fits en attente">
       <Sourcenoefits />
   
   </TabPanel>
          <TabPanel header="en attente integrations">
       
              <Produits />
          
          </TabPanel>
          <TabPanel header="TestArray Select +node ">
            <div>
              <TestArray />
            </div>
          </TabPanel>
          <TabPanel header="FitsViewer">
            <div>
              <FitsViewer />
            </div>
          </TabPanel>
          <TabPanel header="Fireflies">
            <div>
            <Fireflies />
            </div>
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
}
export default TestPanel;