import React, { useState } from 'react'

import styles from './logo-button.module.scss'

export default function LogoButton(props) {
  return (
    <button
      className={styles.button}
      onClick={props.onClick}
      style={{ top: props.pos.y, left: props.pos.x }}
    >
      open
      <br />
      shop.
    </button>
  )
}
