import React, { Component } from 'react';
import { AnimationGroup, Animatable } from 'react-web-animation';

import styles from './FadeWrapper.module.scss'

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
      delay: 0,
      iterations: 1,
      direction: 'normal',
      fill: 'forwards'
    }
  }
  render () {
    const { cards } = this.props

    return (
      <AnimationGroup>
      {
        cards.map((card, i) => (
          <Animatable.div
            id={i}
            key={i}
            className={styles.main_Section}
            keyframes={this.getKeyFrames()}
            timing={this.getTiming(i*1000)}>
            {card}
          </Animatable.div>
        ))
      }
      </AnimationGroup>
    )
  }
}

export default FadeWrapper;
