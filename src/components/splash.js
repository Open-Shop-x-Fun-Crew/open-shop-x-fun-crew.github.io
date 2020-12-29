import React, { useState } from 'react'
import AudioButton from '../components/audio-button.js'
import styles from './splash.module.scss'

export default function Splash(props) {
<<<<<<< HEAD
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
          />
          {/* generic tags can't be inside video elements, audio tag had to be moved out */}
        </div>
      </div>
    )
  } else {
    return null
  }
=======
  // get viewport size to calc outer video size (w,h) & then calc w,h inner video will be based on viewport size
  const viewportWidth = 0
  const viewportHeight = 0
  const innerVideoWidth = 0
  const innerVideoHeight = 0

  return (
    <div className={styles.splash}>
      <video
        autoPlay
        loop
        muted
        width={viewportWidth}
        height={viewportHeight}
        className={styles.outer}
      >
        <source src={props.video + '.webm'} type="video/webm" />
        <source src={props.video + '.mp4'} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      <video
        autoPlay
        loop
        muted
        width={innerVideoWidth}
        height={innerVideoHeight}
        className={styles.inner}
      >
        <source src={props.video + '.webm'} type="video/webm" />
        <source src={props.video + '.mp4'} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      <AudioButton getIconPos={props.getIconPos} />
      {/* generic tags can't be inside video elements, audio tag had to be moved out */}
    </div>
  )
>>>>>>> 79eb4b2d6e9bcde135a69d389cbd2436952c4972
}
