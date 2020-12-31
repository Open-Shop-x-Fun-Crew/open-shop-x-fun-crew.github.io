import React, { useRef, useEffect } from 'react'

import styles from './audio-button.module.scss'

export default function AudioButton(props) {
  const icon = useRef()

  useEffect(() => {
    props.getIconPos(null, icon.current)
    if (props.isVisible) {
      window.addEventListener('resize', e => props.getIconPos(e, icon.current))
      return () =>
        window.removeEventListener('resize', e =>
          props.getIconPos(e, icon.current)
        )
    }
  }, [])

  function playAudio() {
    console.log('audio playing')
  }

  return (
    <button
      aria-label="play / pause audio"
      className={`${styles.audio} ${props.className}`}
      ref={icon}
      onClick={playAudio}
    ></button>
  )
}
