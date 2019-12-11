import React, { useState, useEffect } from "react";
//import listedevice  from '../json/sensors.json';

const DeviceArray = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://swapi.co/api/planets/4/");
      res
        .json()
        .then(res => setPlanets(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  });

  return (
    <div>
      <span>{JSON.stringify(planets)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
export default DeviceArray;