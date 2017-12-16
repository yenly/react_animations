import React, { Component } from 'react';
import { Animated, AnimationGroup, Animatable } from 'react-web-animation';

import Card from './Card'

import styles from './Waapi.module.scss'

const post = {
  title: 'Testing',
  content: 'Testing Content'
}

const post2 = {
  title: 'Testing Again',
  content: 'Testing Boring Content'
}

class Waapi extends Component {
  constructor () {
    super();
    this.state = {
      currentTime: 0,
      playState: 'running'
    }
  }

  getKeyFrames () {
    return [
      { transform: 'scale(110%)',    opacity: 0 },
      { transform: 'scale(100%)',   opacity: 1 }
    ]
  }

  getTiming (duration) {
    return {
      duration,
      easing: 'ease-in',
      delay: 0,
      iterations: 1,
      direction: 'normal',
      fill: 'forwards'
    }
  }
  render () {
    const cards = [ 1, 2, 3, 4, 5, 6 ]
    return (
      <div className={styles.main}>
        <h1>Web Animation Examples</h1>

        <h3>Example 1</h3>
        <div className={styles.main_Section}>
          {/* <Card post={post} />
          <Card post={post} />
          <Card post={post} />
          <Card post={post} />
          <Card post={post} /> */}
          {
            cards.map((card, i) => (
              <Animated.div
                key={i}
                keyframes={this.getKeyFrames()}
                timing={this.getTiming(500+(i*500))}>
                <Card post={post} />
              </Animated.div>
            ))
          }
        </div>
        <h3>Example 2</h3>
        <div className={styles.main_Section}>
          <Card post={post} />
          <Card post={post} />
          <Card post={post} />
          <Card post={post} />
          <Card post={post} />
        </div>

        <h3>Basic Example</h3>
        <Animated.div
          keyframes={this.getKeyFrames()}
          timing={this.getTiming(2500)}>
          <Card post={post} />
        </Animated.div>

        <h3>Group</h3>
        <div className={styles.main_Section}>
          <AnimationGroup>
            <Animatable.div
              id='1'
              keyframes={this.getKeyFrames()}
              timing={this.getTiming(2000)}>
              <Card post={post} />
            </Animatable.div>
            <Animatable.div
              id='2'
              keyframes={this.getKeyFrames()}
              timing={this.getTiming(4000)}>
              <Card post={post2} />
            </Animatable.div>
          </AnimationGroup>
        </div>

        <h3>Another Group using Map</h3>
        <div className={styles.main_Section}>
          <AnimationGroup>
            {
              cards.map((card, i) => (
                <Animatable.div
                  id={card}
                  key={i}
                  keyframes={this.getKeyFrames()}
                  timing={this.getTiming(card*300)}>
                  <Card post={post} />
                </Animatable.div>
              ))
            }
          </AnimationGroup>
        </div>
      </div>
    )
  }
}

export default Waapi;
