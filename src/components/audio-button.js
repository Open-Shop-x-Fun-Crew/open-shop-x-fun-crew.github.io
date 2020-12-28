import React, { useRef, useEffect } from 'react'

import styles from './audio-button.module.scss'

export default function AudioButton(props) {
  const icon = useRef()

  useEffect(() => {
    props.getIconPos(null, icon.current)
    window.addEventListener('resize', e => props.getIconPos(e, icon.current))
    return () =>
      window.removeEventListener('resize', e =>
        props.getIconPos(e, icon.current)
      )
  }, [])

  return <i className={styles.audio} ref={icon}></i>
}
