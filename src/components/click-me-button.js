import React from 'react'

import styles from './click-me-button.module.css'

export default function ClickMeButton(props) {
  const clickedState = props.isClicked ? 'I am clicked' : 'Click me'

  return (
    <div className={styles.otherthing}>
      <button className={styles.button} onClick={props.onClick}>
        {clickedState}
      </button>
    </div>
  )
}
