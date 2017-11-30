import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';
import Projects from './Projects';
import Waapi from './Waapi';
import Home from './Home';
import NotFound from './NotFound';

import styles from './App.module.scss'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
            <div className={styles.container}>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/projects' component={Projects} />
                <Route path='/waapi' component={Waapi} />
                <Route component={NotFound} />
              </Switch>
            </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
