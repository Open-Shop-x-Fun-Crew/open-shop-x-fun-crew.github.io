import React from 'react'

import styles from './toggleable-film.module.scss'

export default function ToggleableFilm(props) {
  console.log(props.title)

  return (
    <li className={styles.filmstrip}>
      <img
        src={props.image}
        alt={props.alt}
        className={styles.image}
        onClick={props.togglePlayer}
      />
      <div className={styles.info}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.description}>{props.description}</p>
      </div>
    </li>
  )
}
