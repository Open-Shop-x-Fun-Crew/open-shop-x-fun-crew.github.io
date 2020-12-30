import React from 'react'
import FilmListItem from './film-list-item'
import Distressed from '../../static/images/Distressed.jpg'
import DimmigaDar from '../../static/images/DimmigaDar.jpg'
import MadDog from '../../static/images/MadDog.jpg'

import styles from './film-list.module.scss'

export default function FilmList(props) {
  if (props.isVisible) {
    return (
      <ul id="film-list">
        <FilmListItem
          image={Distressed}
          text="Distressed"
          description="Short film 2020, 15min"
          alt="Description of film"
        />
        <FilmListItem
          image={DimmigaDar}
          text="Dimmiga Dar"
          description="Short film 2019, 17min"
          alt="Description of film"
        />
        <FilmListItem
          image={MadDog}
          text="Mad Dog"
          description="Full-length film 2016, 85min"
          alt="Description of film"
        />
      </ul>
    )
  } else return null
}
