import React from 'react'
import FilmListItem from './film-list-item'

import styles from './film-list.module.css'


export default function FilmList(props) {
  

  return (
    <ul>
      <FilmListItem/>
      <FilmListItem/>
      <FilmListItem/>
    </ul>
  )
}
