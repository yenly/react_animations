import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';
import Projects from './Projects';
import Waapi from './Waapi';
import Home from './Home';
import ImageLoader from './ImageLoader';
import Slideshows from './Slideshows';
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
                <Route path='/images' component={ImageLoader} />
                <Route path='/slideshows' component={Slideshows} />
                <Route component={NotFound} />
              </Switch>
            </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
