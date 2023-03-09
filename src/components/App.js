import React, {Component, useState} from "react";
import '../styles/App.css';
import Project from './Project.js';

const App = () => {
  return (
    <div id="main">
      <Project 
        name="Rhaul"
        description="sdjkhfljsbdfjb" />
      <Project 
        name="Rdfgdfghaul"
        description="sdjkhfljsdfgsdfgbdfjb" />
    </div>
  )
}


export default App;
