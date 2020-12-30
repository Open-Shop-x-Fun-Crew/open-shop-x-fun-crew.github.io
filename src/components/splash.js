import React, { useState } from 'react'
import AudioButton from '../components/audio-button.js'
import styles from './splash.module.scss'

export default function Splash(props) {
  if (props.isVisible) {
    return (
      <div className={styles.splash}>
        <video autoPlay loop muted width="100%" height="100%">
          <source src={props.video + '.webm'} type="video/webm" />
          <source src={props.video + '.mp4'} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
        <div className={styles.inner}>
          <video autoPlay loop muted width="100%" height="100%">
            <source src={props.video + '.webm'} type="video/webm" />
            <source src={props.video + '.mp4'} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
          <AudioButton
            className={styles.audioButton}
            getIconPos={props.getIconPos}
            isVisible={props.isVisible}
          />
          {/* generic tags can't be inside video elements, audio tag had to be moved out */}
        </div>
      </div>
    )
  } else {
    return null
  }
}
