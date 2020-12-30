import React, { useState, useEffect } from 'react'

import styles from './logo-button.module.scss'

export default function LogoButton(props) {
  const [pos, setPos] = useState({ x: null, y: null })

  function updatePos(e) {
    if (props.splashVisible) {
      setPos({ x: e.clientX, y: e.clientY })
    }
  }

  useEffect(() => {
    window.addEventListener('mousemove',updatePos)
    return () => window.removeEventListener('mousemove', updatePos)
  }, [props.splashVisible])

  return (
    <button
      className={`${styles.button} ${
        props.splashVisible ? styles.moving : styles.sticky
      }`}
      onClick={props.onClick}
      style={{ top: pos.y, left: pos.x }}
    >
      open
      <br />
      shop.
    </button>
  )
}
