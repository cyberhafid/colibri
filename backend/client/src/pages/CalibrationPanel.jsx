import React from 'react';
import { Panel } from 'primereact/panel';
import CalibrationFilter from '../components/Calib/CalibrationFilter';
import { TabView, TabPanel } from 'primereact/tabview';
import { CalibrationArrayCam } from '../components/Calib/CalibrationCam';
import { CalibrationArray } from '../components/Calib/CalibrationArray';
import CalibInfo from './calibration/CalibInfo';
import CalibCam from './calibration/CalibCam';
import { CalibrationHistorique } from '../components/Calib/CalibrationHistorique';

function Calibration() {
  return (

    <div>
      <div className="content-section introduction">
        <div className="feature-intro">
          <h1>DataTable - Calibration</h1>
          <p> - Date a definir</p>
        </div>
      </div>

      <div className="content-section implementation">


        <TabView>

          <TabPanel header="All Cam">
            <div>
              <Panel header="All Cam">
                <CalibrationFilter />
              </Panel>
              <CalibrationArray/>
            </div>
          </TabPanel>


          <TabPanel header="CAGIRE 1">
            <div>
              <Panel header="Camera 1">
                <CalibrationFilter />
              </Panel>
              <CalibrationArrayCam />
            </div>

          </TabPanel>



          <TabPanel header="CAGIRE 2">
            <div>
              <Panel header="Camera 2">
                <CalibrationFilter />
              </Panel>
              <CalibrationArrayCam />
            </div>

          </TabPanel>

          <TabPanel header="DDRAGO">
            <div>
              <Panel header="Camera 2">
                <CalibrationFilter />
              </Panel>
              <CalibrationArrayCam />
            </div>

          </TabPanel>


          <TabPanel header="Historique">
            <div>
        <CalibrationHistorique />
            </div>

          </TabPanel>



          <TabPanel header="Informations image">
            <div>
        <CalibInfo />
            </div>

          </TabPanel>

          <TabPanel header="Informations Camera">
            <div>
        <CalibCam />
            </div>

          </TabPanel>


        </TabView>
      </div>
    </div>
  );
}
export default Calibration;