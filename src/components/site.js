import React, { useState } from 'react'
import FilmList from './film-list'
import martin from '../../static/images/martin.png'
import viktor from '../../static/images/viktor.png'
import styles from './site.module.scss'
import buttonStyles from './logo-button.module.scss'

export default function Site(props) {
  if (props.isVisible) {
    return (
      <div>
        <div className="info">
          <figure>
            <img
              src={martin}
              alt="Picture of Martin as a child with his father, on the beach."
            />
            <figcaption>Martin 1985.</figcaption>
          </figure>
          <section>
            <button>kick up some dust</button>
            <p className={styles.hidden}>info@openshop.se</p>
          </section>
          <div>
            <p>
              Open Shop is filmmaking duo Martin Sandin &amp; Viktor Annerstål.
              Martin writes and directs. Viktor edits and shoots.
            </p>
          </div>
          <figure>
            <img
              src={viktor}
              alt="Picture of Viktor as a baby, with his father in their living room. Dad is taking a photo of Martin with an old style camera."
            />
            <figcaption>Viktor 1993.</figcaption>
          </figure>
          <a
            href="https://www.instagram.com/artandpoeticjustice/?hl=en"
            className={styles.links}
          >
            slow-skate with us
          </a>
          <button>look here</button>
        </div>

        <FilmList />

        <footer>
          <p>open shop Nytorgsgatan 20 117 54 Stockholm info@openshop.se</p>
          <a
            className={`${buttonStyles.button} ${styles.logo} ${styles.links}`}
            href="#top"
          >
            open
            <br />
            shop.
          </a>
        </footer>
      </div>
    )
  } else {
    return null
  }
}
