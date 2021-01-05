import React from 'react'
import ReactPlayer from 'react-player'

import styles from './player.module.scss'
import ToggleableFilm from './toggleable-film'

export default function Player(props) {
  console.log(props.title)
  return (
    <div className={styles.playwrapper}>
      <ReactPlayer
        url={props.url}
        playing={true}
        muted={true}
        volume={0}
        controls={true}
        width="100vw"
        height="100vh"
        className={styles.player}
      />
      <div className={styles.closebtn} onClick={props.togglePlayer}>
        &#10005;
      </div>
      <div>
        <p className={styles.caption}>{props.title}</p>
        <p className={styles.caption}>{props.description}</p>
      </div>
    </div>
  )
}
