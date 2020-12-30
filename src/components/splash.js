import React, { useState } from 'react'
import AudioButton from '../components/audio-button.js'
import styles from './splash.module.scss'
import styled, { keyframes } from 'styled-components'

let expandSplash = pos => keyframes`
  from { clip-path: circle(0px at ${pos.x}px ${pos.y}px); }
  to { clip-path: circle(100px at ${pos.x}px ${pos.y}px); }
  `

let ExpandingWrapperSplash = styled.div`
  position: absolute;

  animation: ${props => expandSplash(props.stickyPos)} 1s linear;
  animation-fill-mode: forwards;
`
export default function Splash(props) {
  return (
    <ExpandingWrapperSplash stickyPos={props.stickyPos} onTop={props.onTop}>
      <div className={styles.splash} style={{ zIndex: props.onTop ? 100 : 80 }}>
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
    </ExpandingWrapperSplash>
  )
}
