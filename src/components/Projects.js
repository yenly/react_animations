import React, { Component } from 'react';
import { TransitionGroup, Transition } from 'react-transition-group'

import Card from './Card'

import styles from './Projects.module.scss'

const post = {
  title: 'Testing',
  content: 'Testing Content'
}

const duration = 3000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  padding: 20,
  display: 'inline-block',
  backgroundColor: '#8787d8'
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

const Fade = ({ in: inProp, children }) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        {children}
      </div>
    )}
  </Transition>
);

class Projects extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false
    }
  }

  componentWillMount () {
    this.setState({
      show: !this.state.show
    })
  }
  render () {
    const cards = [ 1, 2, 3, 4, 5, 6 ]
    return (
      // <div className={styles.projects}>
      //   <Card post={post} />
      //   <Card post={post} />
      //   <Card post={post} />
      //   <Card post={post} />
      //   <Card post={post} />
      //   <Card post={post} />
      //   <Card post={post} />
      //   <Card post={post} />
      // </div>
      <TransitionGroup>
        {
          cards.map((card, i) => (
          <Fade in={this.state.show} key={i}>
            <Card post={post} />
          </Fade>
        ))
      }
      </TransitionGroup>
    )
  }
}

export default Projects;
