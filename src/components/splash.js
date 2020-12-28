import React, { useState } from 'react'
import AudioButton from '../components/audio-button.js'
import styles from './splash.module.scss'

export default function Splash(props) {
  if (props.isVisible) {
    return (
      <div className={styles.splash}>
        <div className={styles.inner}>
          <AudioButton getIconPos={props.getIconPos} />
        </div>
      </div>
    )
  } else {
    return null
  }
}
