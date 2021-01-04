import React, { useState } from 'react'
import Player from '../components/player'

import styles from './toggleable-film.module.scss'

export default function ToggleableFilm(props) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return <Player />
  }

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
