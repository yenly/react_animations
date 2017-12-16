import React, { Component } from 'react';
import FadeWrapper from './FadeWrapper'
import FadeGroup from './FadeGroup'

import Card from './Card'

import styles from './Projects.module.scss'

const post = {
  title: 'Testing',
  content: 'Testing Content'
}

class Projects extends Component {
  render () {
    // const cards = [ 1, 2, 3, 4, 5, 6 ]
    return (
      <div className={styles.main}>
        <h3>Example of FadeGroup with staggered time</h3>
        <div>
          <FadeGroup cards={[<Card post={post} />, <Card post={post} />, <Card post={post} />]} />
        </div>
        <h3>Example of FadeWrapper wrapping each card</h3>
        <div className={styles.main_Section}>
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
        <h3>Example of FadeWrapper with multiple cards</h3>
        <FadeWrapper>
          <div className={styles.main_Section}>
            <Card post={post} />
            <Card post={post} />
            <Card post={post} />
            <Card post={post} />
            <Card post={post} />
          </div>
        </FadeWrapper>
      </div>
    )
  }
}

export default Projects;
