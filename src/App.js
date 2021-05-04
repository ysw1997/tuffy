import logo from './logo.svg';
import './App.css';
import React from'react'
import Sidebar from './components/Sidebar'
import ReactDOM from "react-dom"
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

function App() {
  return (
    <div className="App">

      <Sidebar />
      
    </div>
  );
}

export default App;
