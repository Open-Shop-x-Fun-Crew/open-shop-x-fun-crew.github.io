import React, { useRef, useEffect } from 'react'
import Music from '../../static/splashaudio/test-audio-file.mp3'
import styles from './audio-button.module.scss'

const audio = new Audio(Music)

export default function AudioButton(props) {
  const icon = useRef()

  useEffect(() => props.getIconPos(icon.current), [icon.current])

  useEffect(() => {
    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [])


  function toggleAudio() {
    audio.volume = 0.3
    audio.paused ? audio.play() : audio.pause()    
  }

  return (
    <button
      aria-label="play / pause audio"
      className={`${styles.audio} ${props.className}`}
      ref={icon}
      onClick={toggleAudio}
    ><source src={Music} type="mp3" />
    </button>
  )
}
