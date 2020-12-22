import React, { useState } from 'react'

import styles from './splash.module.scss'

export default function Splash(props) {
  if (props.isVisible) {
    return (
      <div className={styles.splash}>
        <div className={styles.inner}></div>
      </div>
    )
  } else {
    return null
  }
}
