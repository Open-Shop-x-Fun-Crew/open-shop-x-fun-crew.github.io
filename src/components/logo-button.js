import React, { useState, useEffect } from 'react'
import styles from './logo-button.module.scss'
import { isMobile } from 'react-device-detect'

export default function LogoButton(props) {
  const [pos, setPos] = useState({ x: null, y: null })

  function onClick(e) {
    props.onClick({ x: pos.x, y: pos.y })
  }

  function updatePos(e) {
    if (props.splashVisible) {
      setPos({ x: e.clientX, y: e.clientY })
    }
  }

  useEffect(() => {
    isMobile
      ? setPos({ x: window.innerWidth - 60, y: 60 })
      : setPos({ x: 200, y: 200 })
    window.addEventListener('mousemove', updatePos)
    return () => window.removeEventListener('mousemove', updatePos)
  }, [props.splashVisible])

  return pos.x ? (
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
  ) : null
}
