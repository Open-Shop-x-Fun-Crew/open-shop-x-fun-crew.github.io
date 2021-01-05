import React from 'react'
import ToggleableFilm from './toggleable-film'

import styles from './film-list.module.scss'

import filmInfo from '../films/films.json'

export default function FilmList(props) {

  const filmListItems = filmInfo.films.map(film => {

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


  return (
    <ul className={styles.filmList} id="film-list">
      {filmListItems}
    </ul>
  )

}
