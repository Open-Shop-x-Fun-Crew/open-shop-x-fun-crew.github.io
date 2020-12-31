import React from 'react'
import FilmListItem from './film-list-item'

import styles from './film-list.module.scss'

import films from '../films/films.json'

export default function FilmList(props) {
  const filmListItems = films.map(film => {
    console.log(film.filmScreenshot)
    return (
      <FilmListItem
        image={`screenshots/${film.filmScreenshot}`}
        title={film.filmTitle}
        description={film.filmDescription}
        alt={film.filmTagline}
      />
    )
  })

  if (props.isVisible) {
    return <ul id="film-list">{filmListItems}</ul>
  } else return null
}
