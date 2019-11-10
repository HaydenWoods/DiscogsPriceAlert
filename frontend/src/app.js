import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './app.scss';

import Main from './components/main';

export default class App extends Component {
  componentDidMount() {
    console.log("---- FRONTEND STARTED ----");
  }

  render() {
    return (
      <Router className="router">
        <div className="router-container">
          <Switch>
            <Route exact path="/" component={ Main }/>
          </Switch>
        </div>
      </Router>
    );
  }
}
