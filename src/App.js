import './App.css';
import React from'react'
import { Route, Switch } from 'react-router-dom';
import Home from './routes/Home'
import Art from './routes/Art'
import Games from './routes/Games'
import Videos from './routes/Videos'
import Music from './routes/Music'

// core components


function App() {
  return (
<body>
    <div className="App">

      <Switch>
        <Route path="/art">
          <Art />
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
