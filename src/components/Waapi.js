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

  // onPlay() {
  //   console.log('Basic Group example: Play event');
  // }
  //
  // onFinish() {
  //   console.log('Basic Group example: Finish event');
  // }
  //
  // onCancel() {
  //   console.log('Basic Group example: Cancel event');
  // }
  //
  // onPause() {
  //   console.log('Basic Group example: Pause event');
  // }
  //
  // onReverse() {
  //   console.log('Basic Group example: Reverse event');
  // }

  getKeyFrames () {
    return [
      { transform: 'scale(1)',    opacity: 1,     offset: 0 },
      { transform: 'scale(.5)',   opacity: 0.5,   offset: 0.3 },
      { transform: 'scale(.667)', opacity: 0.667, offset: 0.7875 },
      { transform: 'scale(.6)',   opacity: 0.6,   offset: 1 }
    ]
  }

  getTiming (duration) {
    return {
      duration,
      easing: 'ease-in-out',
      delay: 0,
      iterations: 2,
      direction: 'alternate',
      fill: 'forwards'
    }
  }
  render () {
    const cards = [ 1, 2, 3, 4, 5, 6 ]
    return (
      <div className={styles.board}>
        <h1>Web Animation Examples</h1>

        <h3>Basic Example</h3>
        <Animated.div
          keyframes={this.getKeyFrames()}
          timing={this.getTiming(2500)}>
          <Card post={post} />
        </Animated.div>

        <h3>Group</h3>
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

        <h3>Another Group using Map</h3>
        <AnimationGroup>
          {
            cards.map((card) => (
              <Animatable.div
                id={card}
                keyframes={this.getKeyFrames()}
                timing={this.getTiming(card*300)}>
                <Card post={post} />
              </Animatable.div>
            ))
          }
        </AnimationGroup>
      </div>
    )
  }
}

export default Waapi;
