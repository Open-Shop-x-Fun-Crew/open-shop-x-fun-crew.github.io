import React, { useState } from 'react'
import ToggleableFilm from './toggleable-film'
import Player from './player'

import styles from './film-list.module.scss'

import filmInfo from '../films/films.json'

export default function FilmList(props) {
  const [currentFilm, setCurrentFilm] = useState(null)

  const filmListItems = filmInfo.films.map(film => {
    return (
      <ToggleableFilm
        image={`screenshots/${film.filmScreenshot}`}
        title={film.filmTitle}
        description={film.filmDescription}
        alt={film.filmTagline}
        url={film.filmURL}
        togglePlayer={() => setCurrentFilm(film)}
      />
    )
  })

  return (
    <div className={styles.filmList}>
      {currentFilm ? (
        <Player
          url={currentFilm.filmURL}
          togglePlayer={() => setCurrentFilm(null)}
          title={currentFilm.filmTitle}
          description={currentFilm.filmDescription}
        />
      ) : null}
      <ul className={currentFilm ? styles.isPlaying : ''} id="film-list">{filmListItems}</ul>
    </div>
  )
}
