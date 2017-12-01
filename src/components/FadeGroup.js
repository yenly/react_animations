import React, { Component } from 'react';
import { AnimationGroup, Animatable } from 'react-web-animation';

import styles from './FadeWrapper.module.scss'

class FadeWrapper extends Component {
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
    const { cards } = this.props
    const cardWrapperStyles = {
      display: 'flex',
      backgroundColor: 'yellow',
    }

    return (
      <div className={styles.fadeWrapper}>
        <div className={styles.fadeWrapper_Section}>
          <AnimationGroup style={cardWrapperStyles}>
          {
            cards.map((card, i) => (
              <Animatable.div
                id={i}
                key={i}
                keyframes={this.getKeyFrames()}
                timing={this.getTiming(i*1000)}>
                {card}
              </Animatable.div>
            ))
          }
          </AnimationGroup>
        </div>
      </div>
    )
  }
}

export default FadeWrapper;
