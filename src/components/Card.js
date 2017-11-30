import React from 'react';

import styles from './Card.module.scss'

const Card = ({ post }) => {
  return (
    <div className={styles.card}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}

export default Card;
