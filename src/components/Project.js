import React, {Component, useState} from "react";
import '../styles/App.css';

const Project = (props) => {
  return (
    <div id="main_project">
        <h1 className="name" data-ns-test="project-name">{props.name}</h1>
        <p className="description" data-ns-test="project-description">{props.description}</p>
    </div>
  )
}


export default Project;
