import React from 'react';

import borisSmallImg from '../assets/boris_small.jpg'
// import borisLargeImg from '../assets/boris_large.jpg'

import styles from './Card.module.scss'

const Card = ({ post }) => {
  return (
    <div className={styles.card}>
      <a className={styles.card_Image} href='/' style={{ backgroundImage: 'url(' + borisSmallImg + ')' }} />
      <div className={styles.card_TextWrapper}>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    </div>
  )
}

export default Card;
