import React, { Component } from 'react';
// import { TransitionGroup, Transition } from 'react-transition-group'
import FadeWrapper from './FadeWrapper'

import Card from './Card'

import styles from './Projects.module.scss'

const post = {
  title: 'Testing',
  content: 'Testing Content'
}

class Projects extends Component {
  render () {
    const cards = [ 1, 2, 3, 4, 5, 6 ]
    return (
      <div className={styles.projects}>
        <FadeWrapper>
          <Card post={post} />
        </FadeWrapper>
        <FadeWrapper>
          <Card post={post} />
        </FadeWrapper>
        <FadeWrapper>
          <Card post={post} />
        </FadeWrapper>
        <FadeWrapper>
          <Card post={post} />
        </FadeWrapper>
        <FadeWrapper>
          <Card post={post} />
        </FadeWrapper>
      </div>

    )
  }
}

export default Projects;
