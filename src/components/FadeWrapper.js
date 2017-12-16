import React, { Component } from 'react';
import { Animated } from 'react-web-animation';

// import styles from './FadeWrapper.module.scss'

class FadeWrapper extends Component {
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
      delay: 5,
      iterations: 1,
      direction: 'normal',
      fill: 'forwards'
    }
  }
  render () {
    const { children } = this.props
    return (
      <Animated.div
        keyframes={this.getKeyFrames()}
        timing={this.getTiming(2500)}>
        {children}
      </Animated.div>
    )
  }
}

export default FadeWrapper;
