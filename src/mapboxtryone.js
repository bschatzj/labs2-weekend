import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function MapBox() {

  const [values, setValues] = useState({
    adress: "",
    street:"",
    zip: "",
    state: "",
    city: "",
  }
  )
  const [lattitude, setLattitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const userId = 1  
  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${values.adress}%20${values.city}%20${values.state}.json?country=US&access_token=pk.eyJ1IjoiYnNjaGF0emoiLCJhIjoiY2s1Zmx4cWIxMGNzcTNlcXRkYWFtY3lxYSJ9.8C-MS5sNPyzz5qAGoOWWbQ`)
      .then(res => {
        //longitude
        console.log(res.data.features[0].geometry.coordinates[0])
        setLongitude(res.data.features[0].geometry.coordinates[0])
        //lattitude
        console.log(res.data.features[0].geometry.coordinates[1])
        console.log(values)
        setLattitude(res.data.features[0].geometry.coordinates[1])
    })
    e.preventDefault();
  };


  useEffect(() => {
      console.log('hi')
    axios.put(`http://localhost:7000/api/users/edit/${userId}`, {"lattitude": lattitude, "longitude": longitude} )
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
  }, [lattitude])

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Adress</label>
        <input
          onChange={handleChange}
          name="street"
        />
        {/* <label>Number</label>
        <input
          onChange={handleChange}
          name="adress"
        /> */}
        <label>Zip</label>
        <input
          onChange={handleChange}
          name="zip"
        />
        <label>State</label>
        <input
          onChange={handleChange}
          name="state"
        />
        <label>City</label>
        <input
          onChange={handleChange}
          name="city"
        />

        <button type={"submit"} > submit </button>
      </form>

    </div>
  );
}


export default MapBox