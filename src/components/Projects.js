import React, { Component } from 'react';

import Card from './Card'

import styles from './Projects.module.scss'

const post = {
  title: 'Testing',
  content: 'Testing Content'
}

class Projects extends Component {
  render () {
    return (
      <div className={styles.projects}>
        <Card post={post} />
        <Card post={post} />
        <Card post={post} />
        <Card post={post} />
        <Card post={post} />
        <Card post={post} />
        <Card post={post} />
        <Card post={post} />
      </div>
    )
  }
}

export default Projects;
