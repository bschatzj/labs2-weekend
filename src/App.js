import React from 'react';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MapBox from './mapboxtryone';
import signup from './components/FormOverlay';
import distance from './components/Distance';
import Table from './components/Table';
import VolunteerPage from './components/VolunteerProfile';

function App() {
  return (
    <div className="App">
      <Route exact path="/signup" component={signup} />
      <Route exact path="/Volunteers" component={distance} />
      <Route path="/volunteer/:id" component={VolunteerPage} />


    </div>
  );
}

export default App;
