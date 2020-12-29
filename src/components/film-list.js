import React from 'react'
import FilmListItem from './film-list-item'
import film1 from '../images/film1.jpg'
import film2 from '../images/film2.jpg'
import film3 from '../images/film3.jpg'

import styles from './film-list.module.scss'

export default function FilmList(props) {
  return (
    <ul>
      <FilmListItem image={film1} text="Distressed" description="Short film 2020, 15min" alt="Description of film" />
      <FilmListItem image={film2} text="Dimmiga Dar" descrption="Short film 2020, 17min" alt="Description of film" />
      <FilmListItem image={film3} text="Mad Dog" description="Full-length film 2016, 85min" alt="Description of film" />
    </ul>
  )
}
