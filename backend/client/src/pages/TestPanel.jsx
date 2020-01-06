import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import TestArray from '../components/test/TestArray';
import Produits from '../components/test/produits';
import FitsViewer from '../components/Fit/FitViewer';
import Fireflies from '../components/Fireflies/Fireflies';

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
          <TabPanel header="Produit compraison size atomic">
       
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