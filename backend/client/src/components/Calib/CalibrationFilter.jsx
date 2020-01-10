import React from 'react';
import { CalendarInput } from '../Input/CalendarInput';
import { Button } from 'primereact/button';
function CalibrationFilter() {

    return (

        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <h5>Date Start</h5>
                    <CalendarInput />
                </div>

                <div className="col-sm-4">
                    <h5>Date End</h5>
                    <CalendarInput />
                </div>
               <div className="col-sm-4">
               <h5>.</h5>
                    <Button label="Validate" />
                </div>
            </div>
        </div>


    );
}
export default CalibrationFilter; 