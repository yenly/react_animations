import React, { Component } from 'react';

import Card from './Card'

import styles from './ImageLoader.module.scss'

const post = {
  title: 'Testing',
  content: 'Testing Content'
}

class ImageLoader extends Component {
  render () {
    // const cards = [ 1, 2, 3, 4, 5, 6 ]
    return (
      <div className={styles.main}>
        <h3>Example 1</h3>
        <div className={styles.main_Section}>
          <Card post={post} />
          <Card post={post} />
          <Card post={post} />
          <Card post={post} />
          <Card post={post} />
        </div>
        <h3>Example 2</h3>
        <div className={styles.main_Section}>
          <Card post={post} />
          <Card post={post} />
          <Card post={post} />
          <Card post={post} />
          <Card post={post} />
        </div>
      </div>
    )
  }
}

export default ImageLoader;
