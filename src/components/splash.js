import React, { useState } from 'react'
import AudioButton from '../components/audio-button.js'
import styles from './splash.module.scss'
import styled, { keyframes } from 'styled-components'

const expand = pos => keyframes`
  from {
    clip-path: circle(0% at ${pos.x}px ${pos.y}px)
  } to {
    clip-path: circle(200% at ${pos.x}px ${pos.y}px)
  }
  `

const ExpandingDiv = styled.div`
  position: absolute;
  top: 0;
  animation: ${props => expand(props.animationCenter)}
    ${props =>
      props.animationCenter.x === 0 && props.animationCenter.y === 0
        ? 0
        : 500}ms
    linear;
  animation-fill-mode: forwards;
`

export default function Splash(props) {
  return (
    <ExpandingDiv animationCenter={props.animationCenter}>
      <div className={styles.splash} style={{ zIndex: props.onTop ? 90 : 0 }}>
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
    </ExpandingDiv>
  )
}
