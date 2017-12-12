import React from 'react';
import ProgressiveImage from 'react-progressive-image'

import borisSmallImg from '../assets/boris_small.jpg'
import borisLargeImg from '../assets/boris_large.jpg'

import styles from './Card.module.scss'

const Card = ({ post }) => {
  return (
    <div className={styles.card}>
      <ProgressiveImage src={borisLargeImg} placeholder={borisSmallImg}>
        {/* {(src) => <img style={{ width: '200px' }} src={src} alt='an image'/>} */}
        {(src, loading) => (
          <img style={{ opacity: loading ? 0.5 : 1 }} src={src} alt='Butterfly'/>
        )}
      </ProgressiveImage>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}

export default Card;
