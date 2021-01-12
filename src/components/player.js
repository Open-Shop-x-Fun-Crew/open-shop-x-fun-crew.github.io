import React, { useRef, useEffect } from 'react'
import ReactPlayer from 'react-player'

import styles from './player.module.scss'

export default function Player(props) {
  const el = useRef(null)

  useEffect(() => {
    el.current.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <div className={styles.outerwrapper} ref={el}>
      <div className={styles.playwrapper}>
        <ReactPlayer
          url={props.url}
          playing={true}
          muted={true}
          volume={0}
          controls={true}
          width="100%"
          height="90%"
          className={styles.player}
        />
      </div>
      <div className={styles.infoBar}>
        <button
          className={styles.closebtn}
          onClick={e => props.togglePlayer(e, null)}
          style={{ zIndex: 100000000 }}
        ></button>
        <div className={styles.info}>
          <p className={styles.caption}>{props.title}</p>
          <p className={styles.caption}>{props.description}</p>
        </div>
      </div>
    </div>
  )
}
