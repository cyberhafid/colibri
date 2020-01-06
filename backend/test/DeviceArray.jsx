import React, { Component } from 'react';
import data from "../../json/sensors"; 

//https://www.golangprograms.com/react-js/display-json-data-in-reactjs.html

class DeviceArray extends Component {
	render() {
		return (
            <div>
                {
                  data.entities.map((skill) => {
                    return (
                      <div>
                        <h4>{skill.device_name}</h4>
             
                      </div>
                    );
                  })
                } 
            </div>
        );
    }
} 
export default DeviceArray;