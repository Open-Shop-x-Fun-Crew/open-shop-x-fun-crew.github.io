import React from 'react'

import styles from './film-list-item.module.scss'

export default function FilmListItem(props) {
  return <section className={styles.filmstripSection}>
    <img src={props.image} alt={props.alt} />
    <p className={styles.filmstripText}>{props.text}</p>
    <p className={styles.filmstripText}>{props.description}</p>
  </section>
}
