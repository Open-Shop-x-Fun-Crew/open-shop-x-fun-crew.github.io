import React, { useRef, useEffect } from 'react'

import styles from './audio-button.module.scss'

export default function AudioButton(props) {
  const icon = useRef()

  useEffect(() => props.getIconPos(icon.current), [])

  function toggleAudio() {
    console.log('audio')
  }

  return (
    <button
      aria-label="play / pause audio"
      className={styles.audio}
      ref={icon}
      onClick={toggleAudio}
    ></button>
  )
}
