import React, { useState } from 'react'
import Player from '../components/player'

import styles from './toggleable-film.module.scss'

export default function ToggleableFilm(props) {
  console.log(props.title)
  const [playing, setPlaying] = useState(false)

  function togglePlayer() {
    setPlaying(!playing)
  }

  if (playing) {
    return (
      <Player
        url={props.url}
        togglePlayer={togglePlayer}
        title={props.title}
        description={props.description}
      />
    )
  }

  return (
    <li className={styles.filmstrip}>
      <img
        src={props.image}
        alt={props.alt}
        className={styles.image}
        onClick={togglePlayer}
      />
      <div className={styles.info}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.description}>{props.description}</p>
      </div>
    </li>
  )
}
