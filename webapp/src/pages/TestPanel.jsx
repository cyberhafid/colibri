import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import TestArray from '../components/test/TestArray';
import Produits from '../components/test/produits';

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

          <TabPanel header="Last operation">
            <div>
          <Produits />
            </div>
          </TabPanel>

          <TabPanel header="List devices">
            <div>
          
              <TestArray />
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
export default TestPanel;