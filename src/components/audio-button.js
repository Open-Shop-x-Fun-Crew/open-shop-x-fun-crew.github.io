import React, { useRef, useEffect } from 'react'

import styles from './audio-button.module.scss'

export default function AudioButton(props) {
  const icon = useRef()

  function playAudio() {
    console.log('audio playing')
  }

  return <i className={`${styles.audio} ${props.className}`} ref={icon} onClick={playAudio}></i>
}