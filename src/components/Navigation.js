import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.scss';

export default class Navigation extends Component {
  render () {
    return (
      <div className={styles.header}>
        <nav className={styles.header_Navigation}>
          <NavLink exact to='/'>Home</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/idontexist'>Not Found</NavLink>
        </nav>
      </div>
    )
  }
}
