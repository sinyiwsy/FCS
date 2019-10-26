import React, { Component }  from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Main } from './Main';
import { Add } from './Add';
import { Login } from './Login';

export const App = () =>{
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/main" component={ Main } />
          <Route exact path="/add" component={ Add } />
        </Switch>
      </Router>
    );
}

export default App;
