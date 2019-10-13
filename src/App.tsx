import React, { Component }  from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Main} from './Main';
import {Add} from './Add';
import {Login} from './Login';

class App extends Component {
  render() {
    return(
      <Router>
        <Route path="/" exact component={Main} />
        <Route path="/add" component={Add} />
        <Route path="/login" component={Login} />
                {/* <Route exact path="/login" component={Login} /> */}
      </Router>
    );
  }
}

export default App;
