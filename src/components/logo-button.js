import React, { useState } from 'react'

import styles from './logo-button.module.scss'

export default function LogoButton(props) {
  if (props.splashVisible && !props.overlapping) {
    return (
      <button
        className={`${styles.button} ${styles.moving}`}
        onClick={props.onClick}
        style={{ top: props.pos.y, left: props.pos.x }}
      >
        open
        <br />
        shop.
      </button>
    )
  } else if (props.splashVisible) {
    return null
  } else {
    return (
      <button
        className={`${styles.button} ${styles.sticky}`}
        onClick={props.onClick}
        style={{ top: props.stickyPos.y, left: props.stickyPos.x }}
      >
        open
        <br />
        shop.
      </button>
    )
  }
}
