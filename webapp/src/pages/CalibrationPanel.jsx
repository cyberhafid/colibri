import React from 'react';
import { Panel } from 'primereact/panel';
import CalibrationFilter from '../components/Calib/CalibrationFilter';
import { TabView, TabPanel } from 'primereact/tabview';
import { CalibrationArrayCam } from '../components/Calib/CalibrationCam';
import { CalibrationArray } from '../components/Calib/CalibrationArray';
import CalibInfo from './calibration/CalibInfo';

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


          <TabPanel header="Camera 1">
            <div>
              <Panel header="Camera 1">
                <CalibrationFilter />
              </Panel>
              <CalibrationArrayCam />
            </div>

          </TabPanel>

          <TabPanel header="Informations">
            <div>
        <CalibInfo />
            </div>

          </TabPanel>



        </TabView>
      </div>
    </div>
  );
}
export default Calibration;