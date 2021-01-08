import React, { useState } from 'react'
import styles from './splash.module.scss'
import styled, { keyframes } from 'styled-components'

import filmInfo from '../films/films.json'

const noOfSplashVids = filmInfo.splashVideos

const expand = pos => keyframes`
  from {
    clip-path: circle(0% at ${pos.x}px ${pos.y}px)
  } to {
    clip-path: circle(200% at ${pos.x}px ${pos.y}px)
  }
  `

const ExpandingDiv = styled.div`
  height: 100vh;
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
  const [index, setIndex] = useState(
    Math.floor(Math.random() * noOfSplashVids) + 1
  )

  function next() {
    setIndex(index => (index === noOfSplashVids ? 1 : index + 1))
  }

  return (
    <ExpandingDiv animationCenter={props.animationCenter}>
      <div className={styles.splash} style={{ zIndex: props.onTop ? 90 : 0 }}>
        <video
          type="video/mp4"
          className={styles.bgVid}
          src={`splashvids/${props.isMobile ? 'mb' : 'bg'}_${index}.mp4`}
          autoPlay={true}
          onEnded={next}
          muted={true}
          poster={`splashvids/${
            props.isMobile ? 'mb' : 'bg'
          }_poster_${index}.jpg`}
          playsInline={true}
          width="100%"
          height="100%"
        >
          Sorry, your browser doesn't support embedded videos.
        </video>

        <div className={styles.inner}>
          <video
            style={{ display: ` ${props.isMobile ? 'none' : 'block'}` }}
            type="video/mp4"
            className={styles.mainVid}
            src={props.isMobile ? '' : `splashvids/fg_${index}.mp4`}
            autoPlay={true}
            muted={true}
            poster={props.isMobile ? '' : `splashvids/fg_poster_${index}.jpg`}
            playsInline={true}
          >
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      </div>
    </ExpandingDiv>
  )
}
