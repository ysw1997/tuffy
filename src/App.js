import logo from './logo.svg';
import './App.css';
import React from'react'
import Sidebar from './components/Sidebar'
import ReactDOM from "react-dom"
import { makeStyles } from "@material-ui/core/styles";
import { Route, Link, Switch } from 'react-router-dom';
import Home from './routes/Home'
import Create from './routes/Create'
// core components


function App() {
  return (
<body>
    <div className="App">

<Link to="/">Home</Link>
      <Link to="/create">Create</Link>

      <Switch>
        <Route path="/create">
          <Create />
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
