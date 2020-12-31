import React, { useState, useEffect } from 'react'
import styles from './logo-button.module.scss'

export default function LogoButton(props) {
  const [pos, setPos] = useState({ x: null, y: null })
  const [overlapping, setOverlapping] = useState(true)

  function onClick(e) {
    props.onClick({ x: e.clientX, y: e.clientY })
  }

  function updatePos(e) {
    if (props.splashVisible) {
      setPos({ x: e.clientX, y: e.clientY })
      checkIfOverlapping(e)
    }
  }

  function checkIfOverlapping(e) {
    if (props.audioIconPos) {
      if (
        e.clientX > props.audioIconPos.x &&
        e.clientX < props.audioIconPos.x + props.audioIconPos.w &&
        e.clientY > props.audioIconPos.y &&
        e.clientY < props.audioIconPos.y + props.audioIconPos.h
      ) {
        setOverlapping(true)
      } else setOverlapping(false)
    }
  }

  useEffect(() => {
    window.addEventListener('mousemove', updatePos)
    return () => window.removeEventListener('mousemove', updatePos)
  }, [props.splashVisible])

  if (!overlapping) {
    return (
      <button
        className={`${styles.button} ${
          props.splashVisible ? styles.moving : styles.sticky
        }`}
        onClick={onClick}
        style={{ top: pos.y, left: pos.x }}
      >
        open
        <br />
        shop.
      </button>
    )
  } else return null
}
