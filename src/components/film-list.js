import React from 'react'
import FilmListItem from './film-list-item'
import Distressed from '../images/Distressed.jpg'
import DimmigaDar from '../images/DimmigaDar.jpg'
import MadDog from '../images/MadDog.jpg'

import styles from './film-list.module.scss'

export default function FilmList(props) {
  return (
    <ul>
      <FilmListItem image={Distressed} text="Distressed" description="Short film 2020, 15min" alt="Description of film" />
      <FilmListItem image={DimmigaDar} text="Dimmiga Dar" descrption="Short film 2020, 17min" alt="Description of film" />
      <FilmListItem image={MadDog} text="Mad Dog" description="Full-length film 2016, 85min" alt="Description of film" />
    </ul>
  )
}
