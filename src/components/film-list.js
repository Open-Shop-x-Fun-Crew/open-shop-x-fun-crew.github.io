import React from 'react'
import FilmListItem from './film-list-item'

import styles from './film-list.module.scss'

export default function FilmList(props) {
  return (
    <ul>
      <FilmListItem />
      <FilmListItem />
      <FilmListItem />
    </ul>
  )
}
