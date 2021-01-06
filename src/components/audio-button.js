import React, { useRef, useEffect } from 'react'
import Music from '../../static/splashaudio/test-audio-file.mp3'
import styles from './audio-button.module.scss'

let audio = null

export default function AudioButton(props) {
  const icon = useRef()

  useEffect(() => props.getIconPos(icon.current), [icon.current])

  useEffect(() => {
    audio = new Audio(Music)
    audio.volume = 0.5
    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [])

  function toggleAudio() {
    audio.paused ? audio.play() : audio.pause()
  }

  return (
    <>
      <button
        aria-label="play / pause audio"
        className={styles.audio}
        ref={icon}
        onClick={toggleAudio}
      ></button>
    </>
  )
}
