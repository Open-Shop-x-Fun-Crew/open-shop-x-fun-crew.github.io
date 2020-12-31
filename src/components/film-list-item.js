import React from 'react'

import styles from './film-list-item.module.scss'

export default function FilmListItem(props) {
  return (
    <li className={styles.filmstrip}>
      <img src={props.image} alt={props.alt} className={styles.image} />
      <div className={styles.info}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.description}>{props.description}</p>
      </div>
    </li>
  )
}
