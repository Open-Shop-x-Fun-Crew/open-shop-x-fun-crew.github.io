import React from 'react'
import ToggleableFilm from './toggleable-film'

import styles from './film-list.module.scss'

import films from '../films/films.json'

export default function FilmList(props) {
  const ToggleableFilms = films.map(film => {
    return (
      <ToggleableFilm
        image={`screenshots/${film.filmScreenshot}`}
        title={film.filmTitle}
        description={film.filmDescription}
        alt={film.filmTagline}
        url={film.filmURL}
      />
    )
  })

  if (props.isVisible) {
    return (
      <ul className={styles.filmList} id="film-list">
        {ToggleableFilms}
      </ul>
    )
  } else return null
}
