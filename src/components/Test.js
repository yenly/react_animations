import React, { Component } from "react";

import styles from './Test.module.scss';

export default class Test extends Component {
  render () {
    return (
      <div className={styles.testing}>
        Af chicharrones gochujang paleo prism four dollar toast tilde organic affogato helvetica.

        <button className={styles.testing_button}>Click me</button>
      </div>
    )
  }
}
