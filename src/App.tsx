import React, { Component }  from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Main } from './Main';
import { Add } from './Add';
import { Login } from './Login';

import { One } from './one';
import { Two } from './two';
import { Three } from './three';
import { Four } from './four';
import { Fri } from './fri';

export const App = () =>{
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/main" component={ Main } />
          <Route exact path="/add" component={ Add } />

          <Route exact path="/one" component={ One } />
          <Route exact path="/two" component={ Two } />
          <Route exact path="/three" component={ Three } />
          <Route exact path="/four" component={ Four } />
          <Route exact path="/fri" component={ Fri } />
        </Switch>
      </Router>
    );
}

export default App;
