import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import Fireflies from '../components/Fireflies/Fireflies';
/* import { StrateArray } from '../components/Strat/StrateArray';
import { StrateList } from '../components/Strat/StrateList'; */

function ProduitPanel() {
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
          <Fireflies />
           
            </div>
          </TabPanel>


          <TabPanel header="List strategie">
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
export default ProduitPanel;