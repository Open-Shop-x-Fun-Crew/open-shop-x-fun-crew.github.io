import React, { useState } from 'react'
import FilmList from './film-list'

import styles from './site.module.scss'

export default function Site(props) {
  if (props.isVisible) {
    return (
      <div>
        <main>
          <figure>
            <img></img>
            <figcaption>Martin 1985.</figcaption>
          </figure>
          <section>
            <button>kick up some dust</button>
            <p className={styles.hidden}>info@openshop.se</p>
          </section>
          <div>
            <p>Open Shop is film-making duo</p>
          </div>
          <figure>
            <img></img>
            <figcaption>Viktor 1993.</figcaption>
          </figure>
          <a href="https://www.instagram.com/artandpoeticjustice/?hl=en" className={styles.links}>slow-skate with us</a>
          <button>look here</button>
          <FilmList />
        </main>
        <footer>
          <p>footer text</p>
        </footer>
      </div>
    )
  } else {
    return null
  }
}
