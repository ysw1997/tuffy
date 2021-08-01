import './App.css';
import React from'react'
import { Route, Switch } from 'react-router-dom';
import Home from './routes/Home'
import Art from './routes/Art'
import Games from './routes/Games'
import Videos from './routes/Videos'
import Music from './routes/Music'
import Sidebar from './components/Sidebar'
import ParentTeacher from './routes/ParentTecher';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import plane from "./assets/sidebarIcon/tuffyPlane.gif"
import tuffyLogo from './assets/images/header/tuffy_logo.png'



// core components

export const LogoImg = styled.img`
position:relative;
cursor:pointer;
width: 350px;
left:20px;
top:20px;
z-index:1000;

`
const PlaneImg = styled.img`
position: absolute;
top:50px;
left:70px;
width:80%;
`

function App() {
  return (
    
<body>
    {/* <Link to="/"><LogoImg src={tuffyLogo} alt="logo" /></Link>
        <PlaneImg src={plane} /> */}
    <div className="App">
      {/* <Sidebar /> */}
      <Switch>
        <Route path="/art">
          <Art />
        </Route>
        <Route path="/parents&teachers">
          <ParentTeacher />
        </Route>
        <Route path="/music">
          <Music />
        </Route>
        <Route path="/videos">
          <Videos />
        </Route>
        <Route path="/games">
          <Games />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

    </div>
    </body>
  
  )
}

export default App;
