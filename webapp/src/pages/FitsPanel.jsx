import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';

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