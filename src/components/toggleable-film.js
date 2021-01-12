import React from 'react'
import Player from '../components/player'

import styles from './toggleable-film.module.scss'

export default function ToggleableFilm(props) {
  if (props.title === props.currentTrailer) {
    return (
      <Player
        url={props.url}
        title={props.title}
        description={props.description}
        togglePlayer={props.togglePlayer}
      />
    )
  }

  return (
    <li className={styles.filmstrip}>
      <img
        src={props.image}
        alt={props.alt}
        className={styles.image}
        onClick={e => props.togglePlayer(e, props.title)}
      />

      <div className={styles.info}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.description}>{props.description}</p>
      </div>
    </li>
  )
}
