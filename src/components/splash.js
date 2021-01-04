import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import AudioButton from '../components/audio-button.js'
import styles from './splash.module.scss'
import styled, { keyframes } from 'styled-components'

import filmInfo from '../films/films.json'

const backgrounds = filmInfo.splashVideos

function getRandom(number, previousNumber) {
  let randomNumber = Math.floor(Math.random() * number) + 1
  if (randomNumber === previousNumber) {
    return getRandom(number, previousNumber)
  } else return randomNumber
}

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
  const [startVid, setStartVid] = useState(getRandom(backgrounds))

  function next() {
    if (+startVid === backgrounds) {
      setStartVid(1)
    } else {
      setStartVid(+startVid + 1)
    }
  }

  return (
    <ExpandingDiv animationCenter={props.animationCenter}>
      <div className={styles.splash} style={{ zIndex: props.onTop ? 90 : 0 }}>
        <ReactPlayer
          className={styles.bgVid}
          muted={true}
          width="100%"
          height="100%"
          url={`/splashvids/bg_${startVid}.mp4`}
          playing={true}
          onEnded={next}
        />

        <div className={styles.inner}>
          <ReactPlayer
            className={styles.mainVid}
            muted={true}
            url={`/splashvids/fg_${startVid}.mp4`}
            playing={true}
            onEnded={next}
          />
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
